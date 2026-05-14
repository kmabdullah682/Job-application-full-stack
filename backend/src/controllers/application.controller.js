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
            return res.status(400).json({
                message: "Job doesn't exist"
            });
        };

        const existingApplication = await Application.findOne({ seekerId, jobId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You've already applied to this job. Wait for the resutl"
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


export { apply }