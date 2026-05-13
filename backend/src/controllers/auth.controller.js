import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { uploadImage } from "../services/storage.service.js";


async function register(req , res) {
    
    try {

        const { username, email, password, role, bio, profession } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "please enter your important credentials!"
            });
        };

        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Credential is already registered"
            });
        };

        const image = req.file;
        const base64Image = image.buffer.toString("base64");

        const url = await uploadImage(base64Image, image.originalname);
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: encryptedPassword,
            role,
            bio,
            image: url,
            profession
        });


        const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRETS, { expiresIn: "30d" });
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;
        res.cookie("token", token, {
            maxAge: thirtyDays
        });

        return res.status(200).json({
            message: "user created successfully",
            user
        });


    } catch (error) {
        console.error(`Registration error : ${error}`);
        return res.status(400).json({
            message: error.message || error,
        });
    };

};


async function login(req , res) {

    try {

        const { username, email, password } = req.body;

        const user = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (!user) {
            return res.status(401).json({
                message: "unauthorized please first register"
            });
        };


        const isPassword = await bcrypt.compare(password, user.password);

        console.log(password, user.password);
        console.log(isPassword);


        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRETS, { expiresIn: "30d" });
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;
        res.cookie("token", token, {
            maxAge: thirtyDays,
        });


        res.status(200).json({
            message: "user logged in successfully"
        });

    } catch (error) {
        console.error(`Login error : ${error.message}`);
        res.status(500).json({
            message: error.message || error
        });
    };
};


async function logout (req , res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "user logged out successfully"
    });
};



export { register , login , logout};