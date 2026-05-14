import mongoose from "mongoose";


const jobpostSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    jobType: {
        type: String,
        required: true,
        enum: ["Hybrid", "Remote", "On-stie"],
        default: "Remote"
    },


    salary: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }


}, { timestamps: true });


const Job = mongoose.model("Job", jobpostSchema);


export { job };