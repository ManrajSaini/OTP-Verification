const dotenv = require("dotenv");

dotenv.config();

async function sendOTP(otp, phoneNumber){

    try {
        var req = await axios.post(process.env.OTP_URL);

        req.headers({
            "authorization": process.env.YOUR_API_KEY
        });

        req.form({
            "variables_values" : otp,
            "message" : `${otp} is the code for AdmitKard Account Verification. Validity 30 mins`,
            "route": "otp",
            "numbers" : phoneNumber
        });

        // return res.send({
        //     "success": true,
        //     "error_code": 200,
        //     "message": "successfully sent the OTP",
        //     "data": null
        // });

    } catch (err) {
        // return res.send({
        //     "success": false,
        //     "error_code": 404,
        //     "message": err.details[0].message,
        //     "data": null
        // });
    }
}

module.exports = sendOTP;