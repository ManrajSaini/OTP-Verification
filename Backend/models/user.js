const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    countryCode: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    otp: {
        type: Number
    },
    createdAt: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;