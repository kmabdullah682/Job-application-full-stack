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


export { isEmployer };