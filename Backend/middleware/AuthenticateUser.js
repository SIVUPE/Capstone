import { config } from "dotenv";
config()
import jwt from "jsonwebtoken";

const {sign, verify} = jwt
const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
       
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

function createToken(user){
    return sign({
        emailAdd: user.emailAdd,

        userPwd: user.userPwd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )
}

function verifyAToken(req, res, next){
    // Retrieve a token from the browser
      const token = req.headers['Authorization']
      if(token){
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else{
            res?.json({
                status: res.statusCode,
                msg:"Please provide the correct credentials."
            })
        }
      }else{
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
      }
}

export{
    createToken,
     verifyAToken,
     requireAuth
}