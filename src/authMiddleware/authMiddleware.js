const User = require("../features/users/usersModel");

const authMiddleware = async (req,res,next) => {
    const { token }= req.headers;
    if(!token){
        res.status(404).send({error:true , message : "Token not found"})
    }
    let [id,email,password,role] = token.split("-");
    let user = await User.findById(id);
    if(!user){
      return  res.status(404).send({error:true , message: "Invalid Token"})
    }
    if(email===user.email && password===user.password && role===user.role){
        req.id = id;
        req.roleType = role;
        next();
    }else{
        res.status(401).send({error: true , message: "You are not authorised to do this operation"})
    }
}
 module.exports = authMiddleware;