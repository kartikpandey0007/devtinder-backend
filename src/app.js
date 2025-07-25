const express = require('express');
const connectDB = require("./config/database")
const app = express()//calling express function(creating new express js appliaction)-> creating web server
const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(cookieParser())

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request")
const userRouter = require("./routes/user")

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)
app.use("/", userRouter)



connectDB()
.then(()=>{
    console.log("Database connected")
    app.listen(3000, ()=>{
    console.log("server is successfully running on port 3000...");//this will printed when server started succesfully
    })
})
.catch((err)=>{
    console.error("Cannot connect")
})




