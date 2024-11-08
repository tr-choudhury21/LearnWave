const mongoose = require('mongoose');


const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "LMS"
    })
    .then(()=>{
        console.log("Database connected successfully.");
    })
    .catch((err)=>{
        console.log(`Some error occurred while connecting to database: ${err}`);
    })
}

module.exports = dbConnection;