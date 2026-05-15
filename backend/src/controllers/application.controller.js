import { Application } from "../models/application.models.js";
import { Job } from "../models/jobpost.models.js";
import { User } from "../models/user.models.js";


async function apply(req, res) {
    
    try {

        const { resumeUrl } = req.body;
        const { jobId } = req.params;

        const seekerId = req.id;

        if (!resumeUrl) {
            return res.status(400).json({
                message: "please provide your resume"
            });
        };

        const jobExists = await Job.findById(jobId);

        if (!jobExists) {
            return res.status(404).json({
                message: "Job doesn't exist"
            });
        };

        const existingApplication = await Application.findOne({ seekerId, jobId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You've already applied to this job. Wait for the result"
            });
        };

        const application = await Application.create({
            jobId,
            resumeUrl,
            seekerId
        });


        return res.status(201).json({
            message: "application has been submitted",
            application
        });

    } catch (error) {
        console.error(error.message + "error");
        return res.status(500).json({
            message: "internal server error"
        });
    };

};


async function getAllApplications (req , res) {
    
    try {

        const employerId = req.userId;

        const createdJobPosts = await Job.find({ employer: employerId });

        if (createdJobPosts.length === 0) {
            return res.status(404).json({
                message: "Theres no jobs create by you"
            });
        };

        const jobIds = createdJobPosts.map((job) => job._id);

        const applications = await Application.find({ jobId: { $in: jobIds }}).sort({ createdAt: -1 }).populate("seekerId" , "username email iamge").populate("jobId" , "title description");
        

        if (!applications) {
            return res.status(404).json({
                message: "No applications on this job yet"
            });
        };


        return res.status(200).json({
            message: "applications fetched successfully",
            applications: applications
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "internal server error"
        });
    };

};


async function updateStatus(req, res) {
    
    try {

        const { status } = req.body;
        const { applicationId } = req.params;

        if (!applicationId) {
            return res.status(400).json({
                message: "Please provide your jobId to update the status"
            });
        };

        const updatedApplication = await Application.findByIdAndUpdate(applicationId ,
            { status: status },
            { new: true }
        );

        if (!updatedApplication) {
            return res.status(404).json({
                message: "Application not found"
            });
        };

        return res.status(200).json({
            message: "Application status updated successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        });
    };

};

async function showApplicationToApplicant (req , res) {
    
    try {

        const applicantId = req.id;

        const appliedJobs = await Application.find({ seekerId: applicantId }).select("-seekerId -jobId").sort({ createdAt: -1 });

        if (appliedJobs.length === 0) {
            return res.status(404).json({
                message: "you did not applied to any job"
            });
        };

        return res.status(200).json({
            message: "Applications fetched successfully",
            appliedJobs
        });

    } catch (error) {
        return res.status(500).json({
            message: "internal server Error"
        });
    };

}


export { apply, getAllApplications , updateStatus , showApplicationToApplicant };