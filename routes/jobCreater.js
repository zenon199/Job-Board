
import express from 'express';
import { isJobCreater, isAuth } from '../middlewares/isAuth.js';
import { createJob, deleteJob } from '../controllers/jobCreater.js';

const router = express.Router();

router.post("/job/new", isAuth, isJobCreater, createJob);
router.delete("/job/:id", isAuth, isJobCreater, deleteJob);
router.get("/stats", isJobCreater, isAuth, getAllStats);

export default router;