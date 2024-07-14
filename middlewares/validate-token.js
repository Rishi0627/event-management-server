const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

const validateToken = (req,res,next) => {
    try {
        const token = req.cookies.token;
        if(!token)
            {
                return res.status(401).json({message: "unauthorized"});
            }
            //to decrypt use verify method
            const decreptObj = jwt.verify(token,process.env.JWT_SECRET_KEY);
            req.user = decreptObj;
            next();
        
    } catch (error) {
        res.status(401).json({message:"Invalid token"})        
    }
}    

module.exports = validateToken;