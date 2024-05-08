const jwt =require('jsonwebtoken')

const jwtMiddleware =(req,res,next)=>{
    console.log("inside jwtMiddleware");
   try{
     const token = req.headers["authorization"].split(" ")[1]
    console.log(token);
   if(token){
    const jwtResponse = jwt.verify(token,process.env.JWT_SECRET);
    console.log(jwtResponse);
    req.payload = jwtResponse.userId
    next()

   }else{
    res.status(401).json("please provide a valid token")
   }
   }catch{
    res.status(403).json("please login")
   }
}

module.exports =jwtMiddleware