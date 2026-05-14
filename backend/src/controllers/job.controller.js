import { Job } from "../models/jobpost.models.js";
import { User } from "../models/user.models.js";


async function createJobPost (req , res) {
    
    try {

        const { title, description, category, jobType, salary, location } = req.body;
    
    if (!title || !description || !salary || !location) {
        return res.status(400).json({
            message: "Please provide the important credentials to post a job"
        });
    };

    const employerId = req.userId;
    const employer = await User.findById(employerId);

    if (!employer) {
        return res.status(404).json({
            message: "please provide the employer information"
        });
    };

    const jobPost = await Job.create({
        title,
        description,
        category,
        jobType,
        salary,
        location,
        employer: employerId
    });


    return res.status(201).json({
        message: "Job post posted successfully"
    });

    } catch (error) {
        console.error("Job post error ", error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }

};



export { createJobPost };