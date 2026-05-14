import { Job } from "../models/jobpost.models.js";

async function searchJobs (req , res) {
    
    try {

        const { keyword, jobType, minSalary } = req.query;

        const query = {};

        if (keyword) {
            query.$text = { $search: keyword };
        };

        if (jobType) {
            query.jobType = jobType
        };

        if (minSalary) {
            query.salary = {$gte: Number(minSalary)};
        };

        const jobs = await Job.find(query).sort({ createdAt: -1 }).populate("employer", "username email image");

        return res.status(200).json({
            message: "jobs feteched successfully",
            jobs
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: error.message || "error"
        });
    };
};


export { searchJobs };