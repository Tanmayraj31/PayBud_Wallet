const User = require("../models/userModel");
const Account = require("../models/accountModel");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const bcrypt = require("bcrypt");


const signupSchema = zod.object({
    username: zod.string("Invalid email").email(),
    password: zod.string().min(6,"must be 6 char long"),
    firstName: zod.string(),
    lastName: zod.string(),
})

const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})


exports.signup = async (req, res)=>{
    const validateData = signupSchema.parse(req.body);
    const{username, password, firstName, lastName} = validateData;

    const exixtingUser = await User.findOne({username});
    if(exixtingUser){
       return res.json({msg: " user already exixts"})
    };

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({username, password:hashed, firstName,lastName})

    //const userid = user._id;
    const account = await Account.create({userId:user._id, balance:Number(10000) });

    
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
    res.status(200).json({msg:"User created successfully", token})

   
}

exports.signin = async(req,res)=>{
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if(!user){
        res.status(404).json({msg:"User not found"})
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(401).json(({msg:"invalid password"}))
    };

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
    res.status(200).json({msg:"Login Succesfull!", token, user:{
        firstName: user.firstName
    }})

}

exports.update = async(req,res)=>{
    const validateData = updateSchema.safeParse(req.body);
    const{password, firstName, lastName}= validateData;

    const user = await User.findOne(user)

}

exports.bulk = async(req,res)=>{
    const filter = req.query.filter|| "";

    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter,
                "$options": "i"
            }
        },{
            lastName:{
                "$regex":filter,
                "$options": "i"
            }
        }
    ]
    })

    res.json({
        user: users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
}