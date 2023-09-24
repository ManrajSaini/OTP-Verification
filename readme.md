# OTP Verification App

This is a simple mobile number verification app that allows users to enter their mobile number, receive an OTP (One-Time Password), and verify it. The app consists of three screens:

# **Key Feature: User can receive OTP on their valid Phone Number's**

1. **Mobile Number Screen:** Users can enter their mobile number and choose their country code (optional).
2. **OTP Verification Screen:** After entering the mobile number, users receive an OTP on the same screen via a snackbar notification and on provided Phone Number. They can enter the OTP digit by digit.
3. **Success Screen :** If the OTP is successfully verified, users are redirected to a success screen with a success message. 

## Screenshots
![Screenshot 2023-09-24 190937](https://github.com/ManrajSaini/OTP-Verification/assets/86542773/cfeb47df-6049-43f5-b10a-a934d66ce458)
![Screenshot 2023-09-24 191026](https://github.com/ManrajSaini/OTP-Verification/assets/86542773/123610e7-3fb2-4444-8bcf-db380d9a98cf)
![Screenshot 2023-09-24 191052](https://github.com/ManrajSaini/OTP-Verification/assets/86542773/c7a42b35-d022-44a6-9829-910f9c7409d2)

Screenshots of the app

## Video Demonstration

Watch the video demonstration of the app 


https://github.com/ManrajSaini/OTP-Verification/assets/86542773/b0e8f675-eca7-4220-8ce0-391a8ef9004d


## Installation and Setup

To run this project on your PC, follow these steps:

### Backend Setup

1. Clone the repository to your local machine.   

Navigate to the backend folder and frontend folder.   

npm install   
npm run   


Set up environment variables. Create a .env file in the backend directory and add the following:    

PORT=port    
YOUR_API_KEY=your-fast2sms-api-key   
MONGODB_URI=your-mongodb-connection-uri    
Replace your-fast2sms-api-key with your Fast2SMS API key and your-mongodb-connection-uri with your MongoDB connection URI.        


The frontend should now be running on http://localhost:3000.    
The Backend is deployed on render .  

Open your web browser and go to http://localhost:3000 to access the app.    

# Basic Validations   
Mobile number should be 10 digits and consist only of numbers.    
OTP verification is required, and an error message will be displayed if the OTP is not matched.    

# Technologies Used    
React for the frontend.    
Node.js and Express.js for the backend.    
MongoDB for data storage.   
Fast2SMS API for sending OTP messages.   
