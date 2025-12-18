const mongoose = require("mongoose");
const User = require("./userModel");

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        balance:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const Account = mongoose.model('Acount', accountSchema);

module.exports = Account;