const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    email:String,
    linkedin:String
});

module.exports=mongoose.model("appliedUser",userSchema);