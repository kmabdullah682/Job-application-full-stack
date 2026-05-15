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


async function getJobs (req , res) {
  
    const jobs = await Job.find().limit(30);

    return res.status(200).json({
        message: "Job fetched successfully",
        jobs: jobs
    });
};


async function editJob (req , res) {
    
    try {

        const { title, description, category, salary, location } = req.body;
        const { jobId } = req.params;

        const update = {};

        if (title) {
            update.title = title;
        };


        if (description) {
            update.description = description
        };

        if (category) {
            update.category = category
        };

        if (salary) {
            update.salary = salary
        };

        if (location) {
            update.location = location
        };


        const job = await Job.findByIdAndUpdate({ _id: jobId , employer: req.userId },  update , { new: true } );
        
        if (!job) {
            return res.status(404).json({
                message: "This job does not exists"
            });
        };


        return res.status(200).json({
            message: "job updated successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server problem"
        });
    };

};


async function deleteJob (req , res) {
    
    try {

        const { jobId } = req.params;

        const deleteJob = await Job.findOneAndDelete({ _id: jobId, employer: req.userId });
        

        if (!deleteJob) {
            return res.status(404).json({
                message: "no job exists on this credential"
            });
        };

        res.status(200).json({
            message: "job post delete succesfully"
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        });
    };

}



export { createJobPost, getJobs, editJob , deleteJob };