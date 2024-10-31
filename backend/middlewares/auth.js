import jwt from "jsonwebtoken"

export function auth(req,res,next) {
    try{
        const token = req.headers.authorisation;
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if (decoded){
            req.userID = decoded.userID;
            next();
        }
        else{
            res.json({
                msg:"Invalid Creds."
            })    
        }
    }
    catch(err){
        res.json({
            msg:"unverified request."
        })
    }
}
