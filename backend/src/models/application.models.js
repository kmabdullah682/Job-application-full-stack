import mongoose, { mongo } from "mongoose";

const applicationSchema = new mongoose.Schema({

    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },

    seekerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    resumeUrl: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['Pending', 'Under Review', 'Interviewing', 'Hired', 'Rejected'],
        default: "Pending"
    }

}, { timestamps: true });


//? To prevent user applying on a same job twice

applicationSchema.index({ jobId: 1, seekerId: 1 }, { unique: true });


const Application = mongoose.model("Application", applicationSchema);

export { Application };