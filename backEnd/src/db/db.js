let mongoose = require("mongoose")

async function connectToDB(){
    try{
    await mongoose.connect(process.env.MONGODB_URL) // this is how to access the .env file variables
    console.log("connected to db");
    }catch(error){
        console.log("Cannot connect to the server error below👇");
        console.log(error);
    }
}

module.exports = connectToDB