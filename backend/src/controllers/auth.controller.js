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
            password,
            role,
            bio,
            image: url,
            profession
        });


        const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRETS, { expiresIn: "30d" });
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;
        res.cookie("token", token, {
            httpOnly: true,
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


export { register };