const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const connectDB = require("./config/connectDB");
const otpRouter = require("./routes/otpRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();

app.use("/api", otpRouter);

// Home Route
app.get("/", (req,res) => {
    res.send({
        "success": true,
        "error_code": null,
        "message": "Server is Running",
        "about": "Designed a OTP-Verification login page for AdmitKard. Server is Live 🎉"
    });
});

app.listen(process.env.PORT || 9000, ()=> {
    console.log("Server Started");
});