import mongoose from "mongoose";

const otpSchema=new mongoose.Schema({

    email:{
        type:String,
        unique:true,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
     expiresAt: {
      type: Date,
      required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }





}, {timestamps:true}

)
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Otp=mongoose.model("OTP",otpSchema)

export default Otp