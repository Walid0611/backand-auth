var jwt = require('jsonwebtoken');
const userSchema = require('../model/user');
const { env } = require('process');


exports.isAuth = async(res,res,next)=>{
    try{
        const token =req.header('Authorization');
        var decoded =jwt.verify(token,process,env,privateKey)
    if (!decoded){return res.json <({error})}
    const user =await userSchema.findById(decoded.id )

    res.user = user
    next()

    }catch(err){
        console.log(err)
    }

}