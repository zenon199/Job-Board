
import TryCatch from "../middlewares/tryCatch.js";
import { Jobs } from "../db/job.js";
import {User} from "../db/user.js"


export const createCourse = TryCatch(async(req,res) => {
    const {title, description, category, createdBy, duration, price} = req.body;

    await Jobs.create({
        title,
        description,
        category,
        createdBy,
        duration,
        price,

    });

    res.status(201).json({
        message: "Job created successfully"
    });
});

export const deleteJob = TryCatch(async (req,res) => {
    const  job = await Jobs.findById(req.params.id);
    await job.deleteOne();

    res.json({
        message: "Job Deleted",
    })
});

export const getAllStats = TryCatch( async (req, res) => {
    const totalJobs = (await Jobs.find()).length;
    res.json({
        totalJobs
    });
});