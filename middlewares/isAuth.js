
import jwt from 'jsonwebtoken';
import {User} from '../db/user.js'

export const isAuth = async(req,res,next) => {
    try{
        const token = req.headers.token;

        if(!token) return res.status(403).json({
            message: "Please Login",
        });

    const decodedData = jwt.verify(token, process.env.Jwt_Sec);

    req.user = await User.findById(decodedData._id);
    next();

    }catch(error){
        res.status(500).json({
            message: "Login First",
        })
    }
};

export const isJobCreater = (req, res, next) => {
    try{
        if(req.user.role !== "jobCreater") return res.status(403).json({
            message: "You are not JobCreater",
        });
        next();
    }catch(error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
