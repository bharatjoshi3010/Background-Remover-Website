import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',()=>{   //whenever we connected with mongodb this connection will work automatically
        console.log("Database Connected");

    })

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

export default connectDB;