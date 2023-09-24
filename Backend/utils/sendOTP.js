const dotenv = require("dotenv");
const fast2sms = require("fast-two-sms");

dotenv.config();

async function sendOTP(otp, phoneNumber, res) {
    const options = {
        authorization: process.env.YOUR_API_KEY,
        message: `${otp} is the code for AdmitKard Account Verification. Validity 30 mins`,
        numbers: [phoneNumber]
    };

    try {
        await fast2sms.sendMessage(options);
        res.send("OTP sent Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = sendOTP;
