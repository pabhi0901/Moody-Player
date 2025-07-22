require("dotenv").config() //it is used kyuki iski wajah se hi ham .env file ke variables ko access kr skte hai
const app = require("./src/app")
const connectToDB = require("./src/db/db")
connectToDB() 


app.listen(3000,()=>{
    console.log("Server has been started at 3000 port");
})