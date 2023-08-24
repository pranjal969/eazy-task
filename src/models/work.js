const { Schema, default: mongoose } = require("mongoose");

const workSchema=new Schema({
title:String,
description:{
    type:String,
    required:[true,"Title Required !!"],
},
status:{
    type:String,
    required:true,
},
author:String,
category:String
});

export const Work=mongoose.models.work || mongoose.model("work",workSchema)

