
import express from 'express';
import {isAuth} from  '../middlewares/isAuth.js';
import { getAllJobs, getSingleJob } from '../controllers/jobs.js';

const router = express.Router();

router.get("/job/all", getAllJobs);
router.get("/job/:id", getSingleJob);

export default router;