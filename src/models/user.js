const { Schema, default: mongoose } = require("mongoose");

const userSchema=new Schema({
name:String,
email:{
    type:String,
    required:[true,"Email Required !!"],
    unique:true
},
password:{
    type:String,
    required:true,
},
about:String,
profileUrl:String,
address:{
    street:String,
    city:String,
    pincode:Number
}
});

export const User=mongoose.models.users || mongoose.model("users",userSchema)

