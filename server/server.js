// npm i express cors dotenv nodemon form-data jsonwebtoken mongoose multer axios svix razorpay
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

//app config
const PORT = process.env.PORT || 4000;
//if port defined in env then we use that if not then we use 4000
const app = express()

// Intialize Middlewares
app.use(express.json())
app.use(cors())

//API routes
app.get('/',(req, res)=> res.send("API working"))

app.listen(PORT, ()=> console.log("Server running on PORT" + PORT))