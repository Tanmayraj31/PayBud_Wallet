const User = require("../models/userModel");
const Account = require("../models/accountModel");
const { default: mongoose } = require("mongoose");

exports.balance = async(req,res)=>{
    console.log("Hello from account", req.user);
    const account = await Account.findOne({userId:req.user.id});

    res.json({
        bal:account.balance
    })

}

exports.transfer = async(req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const{amount, to} = req.body;

    const account = await Account.findOne({userId:req.user.id, }).session(session);

    if(!account || account.balance< amount){
        await session.abortTransaction();
        return res.status(400).json({msg:"insufficent balance"});

    }

    const toAccount = await Account.findOne({userId:to}).session(session);


    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({msg:"invalid account"});
    }

    await Account.updateOne({userId:req.user.id},{$inc: {balance: -amount}}).session(session);
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

    await session.commitTransaction();

    res.json({msg:"Transaction successfull"})
}
