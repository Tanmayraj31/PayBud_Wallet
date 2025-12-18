const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config")

exports.auth = (req,res,next)=>{
    
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({msg:"no token"})
    }
    const token = authHeader.split(" ")[1];


    try{
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        console.log("req user=", req.user)
        next();
    }catch(error){
        console.log(error)
        res.status(401).json({msg:"invalid token"});

    }
}