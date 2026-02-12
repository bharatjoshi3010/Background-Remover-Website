import mongoose from "mongoose";

const userSchema = new mongoose.Schem({
    clerkId: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    photo: {type:String, required:true},
    firstName: {type:String},
    lastName: {type:String},
    creditBalance: {type: Number, default:5}
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;

//when we login using clerk, the clerk save our data and we can save this data to our backend using clerk webhooks