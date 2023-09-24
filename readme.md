# Mobile Number Verification App

This is a simple mobile number verification app that allows users to enter their mobile number, receive an OTP (One-Time Password), and verify it. The app consists of three screens:

**Key Feature: User can receive OTP on their valid Phone Number's**

1. **Mobile Number Screen:** Users can enter their mobile number and choose their country code (optional).
2. **OTP Verification Screen:** After entering the mobile number, users receive an OTP on the same screen via a snackbar notification and on provided Phone Number. They can enter the OTP digit by digit.
3. **Success Screen :** If the OTP is successfully verified, users are redirected to a success screen with a success message. 

## Screenshots

Screenshots of the app

## Video Demonstration

Watch the video demonstration of the app 

## Installation and Setup

To run this project on your PC, follow these steps:

### Backend Setup

1. Clone the repository to your local machine.

Navigate to the backend folder.

bash
Copy code
cd mobile-number-verification/backend
Install the required dependencies.

bash
Copy code
npm install
Set up environment variables. Create a .env file in the backend directory and add the following:

makefile
Copy code
PORT=3001
YOUR_API_KEY=your-fast2sms-api-key
MONGODB_URI=your-mongodb-connection-uri
Replace your-fast2sms-api-key with your Fast2SMS API key and your-mongodb-connection-uri with your MongoDB connection URI.

Start the backend server.

bash
Copy code
npm start
The backend server should now be running on port 3001.

Frontend Setup
Navigate to the frontend folder (from the root project directory).

bash
Copy code
cd frontend
Install the required dependencies.

bash
Copy code
npm install
Start the frontend development server.

bash
Copy code
npm start
The frontend should now be running on http://localhost:3000.

Open your web browser and go to http://localhost:3000 to access the app.

Basic Validations
Mobile number should be 10 digits and consist only of numbers.
OTP verification is required, and an error message will be displayed if the OTP is not matched.
Technologies Used
React for the frontend.
Node.js and Express.js for the backend.
MongoDB for data storage.
Fast2SMS API for sending OTP messages.