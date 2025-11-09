import express from "express"
import 'dotenv/config'
import connectDB from "./database/db.js"
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"
import cors from 'cors'
import "./config/passport.js"

const app=express()

const PORT=process.env.PORT||3000

//middleware
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    Credentials:true
}))

app.use('/auth',authRoute)
app.use('/user',userRoute)

// http://localhost:8000/user/register

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is listening at PORT ${PORT}`)
})