import mongoose from 'mongoose';

const schema = new mongoose.schema({
    name: {
        type: String,
        required: true.valueOf
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "JobSeeker",
    }
})

export const User = mongoose.model("User", schema);