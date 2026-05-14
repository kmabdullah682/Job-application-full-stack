import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";


async function isEmployer (req , res , next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "not authorized please sign up"
        });
    };

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRETS);

        if (decoded.role !== "employer") {
            return res.status(403).json({
                message: "You are not allowed to create a job post"
            });
        };


        req.userId = decoded.id;

        next();

    } catch (error) {
        return res.status(400).json({
            message: "invalid token"
        });
    };

};


async function isUser (req , res , next) {
    
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "unauthorized please sign in"
        });
    };

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRETS);

        if (decoded.role !== "applicant") {
            return res.status(403).json({
                message: "please sign up as an applicant"
            });
        };

        next();

    } catch (error) {
        return res.status(400).json({
            message: "Invalid token"
        });
    };

}


export { isEmployer , isUser };