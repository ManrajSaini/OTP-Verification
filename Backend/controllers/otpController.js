const dotenv = require("dotenv");
const Joi = require('joi');

const User = require("../models/user");

const generateOTP = require("../utils/generateOTP");
const sendOTP = require("../utils/sendOTP");
const clearOldOTP = require("../utils/clearOTP");

dotenv.config();

const signinUser = async(req,res) => {
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;

    if(!phoneNumber){
        return res.send({
            "success": false,
            "error_code": 400,
            "message": "Enter Phone Number",
            "data": null
        });
    }
    
    const inputSchema = Joi.object({
        countryCode: Joi.string().required(),
        phoneNumber: Joi.string().required().pattern(/^[0-9]{10}$/)
    });

    const { error }  = inputSchema.validate(req.body);

    if(error){
        return res.send({
            "success": false,
            "error_code": 404,
            "message": error.details[0].message,
            "data": null
        });
    }

    const otp = generateOTP();
    
    try {
        await sendOTP(otp, phoneNumber, res);

        const oldUser = await User.findOne({phoneNumber: phoneNumber});

        if(oldUser){
            oldUser.otp = otp;
            oldUser.createdAt = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'});

            await oldUser.save();

            return res.send({
                "success": true,
                "error_code": 200,
                "message": "OTP sent successfully",
                "data": oldUser
            }); 
        }

        else{
            const newUser = new User({
                countryCode: countryCode,
                phoneNumber: phoneNumber,
                otp: otp,
                createdAt: new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'})
            });

            await newUser.save();
            
            return res.send({
                "success": true,
                "error_code": 200,
                "message": "OTP sent successfully",
                "data": newUser
            });
        }

    } catch (err) {
        return res.send({
            "success": false,
            "error_code": 500,
            "message": err.message,
            "data": null
        });
    }
};

const otpVerification = async(req,res) => {
    try {
        const countryCode = req.body.countryCode;
        const phoneNumber = req.body.phoneNumber;
        const inputOTP = req.body.otp;

        if(!inputOTP){
            return res.send({
                "success": false,
                "error_code": 400,
                "message": "Enter OTP to Verify",
                "data": null
            });
        }

        const inputSchema = Joi.object({
            countryCode: Joi.string(),
            phoneNumber: Joi.string().required().pattern(/^[0-9]{10}$/),
            otp: Joi.number().integer().min(1000).max(9999).required()
        });

        const { error }  = inputSchema.validate(req.body);

        if(error){
            return res.send({
                "success": false,
                "error_code": 404,
                "message": error.details[0].message,
                "data": null
            });
        }

        clearOldOTP();

        const oldUser = await User.findOne({phoneNumber: phoneNumber});

        if(!oldUser){
            return res.send({
                "success": false,
                "error_code": 402,
                "message": "OTP not Verified or OTP Expired",
                "data": null
            });
        }

        if(oldUser.otp.toString() !== inputOTP){
            return res.send({
                "success": false,
                "error_code": 402,
                "message": "Wrong OTP entered",
                "data": null
            });
        }

        res.send({
            "success": true,
            "error_code": 200,
            "message": "OTP Verified Successfully",
            "data": null
        });

        await User.deleteOne({phoneNumber: phoneNumber});
        return;
    } 
    catch (err) {
        return res.send({
            "success": false,
            "error_code": 500,
            "message": err.message,
            "data": null
        });
    }
};


module.exports = {
    signinUser,
    otpVerification,
}