import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        lowercase: true,
        trim: true,
        minLength: [6, "username must be atleast of 6 characters"]
    },

    email: {
        type: String,
        required: [true, "email is required"],
        lowercase: true,
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "password might need to be at least of 8 characters"]
    },

    role: {
        type: String,
        enum: ["applicant", "employer"],
        default: "applicant",
        required: [true, "please define your role"]
    },

    bio: {
        type: String,
    },

    image: {
        type: String
    },

    profession: {
        type: String
    },

    savedJobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job"
        }
    ]


}, { timestamps: true });

const User = mongoose.model("User", userSchema);


export { User };