const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

async function sendOTP(otp, phoneNumber, res) {
    const smsData = {
        message: `${otp} is the code for Account Verification. Validity 30 minutes`,
        language: "english",
        route: "q",
        numbers: phoneNumber
    }

    await axios.post(process.env.OTP_URL, smsData, {
        headers: {
            Authorization: process.env.YOUR_API_KEY
        }
    })
    .then(response => {
        console.log("SMS OTP sent successfully", response.data);
    })
    .catch(error => {
        console.log("Unable to send OTP", error);
    });
}

module.exports = sendOTP;
