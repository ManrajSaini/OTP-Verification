const User = require("../models/user");

async function clearOldOTP(){
    const users = await User.find();

    users.map(async (user) => {
        const currDate = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'});

        const currTime = new Date(currDate);
        const createdTime = new Date(user.createdAt);

        const timeDiff = (currTime - createdTime)/(1000 * 60);

        if(timeDiff >= 30){
            await User.deleteOne();
        }
    });

    return;
}

module.exports = clearOldOTP;