
import TryCatch from '../middlewares/tryCatch.js'
import { Jobs } from '../db/job.js'

export const getAllJobs = TryCatch(async (req,res) => {
    const jobs = await Jobs.find();
    res.json({
        jobs,
    })
});

export const getSingleJob = TryCatch(async (req,res) => {
    const job = await  Jobs.findById(req.params.id);

    res.json({
        job,
    })
});
