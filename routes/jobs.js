
import express from 'express';
import { fetchLecture, fetchLectures, getAllCourses, getMyCourses, getSinglleCourse } from '../controllers/course.js';
import TryCatch from '../middlewares/tryCatch.js';
import { Lecture } from '../models/Lecture.js';
import {User} from '../models/User.js'
import {isAuth} from  '../middlewares/isAuth.js';

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSinglleCourse);
router.get("/lectures/:id", isAuth,fetchLectures);
router.get("/lecture/:id", isAuth, fetchLecture);
router.get("/mycourse", isAuth, getMyCourses);

export default router;