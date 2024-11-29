import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { connectDb } from './db/db.js';
import cors from 'cors'
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Importing routes
import jobSeekerRoutes from './routes/jobSeeker.js';
import jobRoutes from './routes/jobs.js';
import jobCreaterRoutes from './routes/jobCreater.js';

//using routes
app.use("/api", jobSeekerRoutes);
app.use("/api", jobRoutes);
app.use("/api", jobCreaterRoutes);




app.listen(process.env.PORT,() =>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
    connectDb();
});