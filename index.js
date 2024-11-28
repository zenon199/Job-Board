import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { connectDb } from './database/db.js';
import cors from 'cors'
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));


// Importing routes
import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';

//using routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);




app.listen(process.env.PORT,() =>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
    connectDb();
});