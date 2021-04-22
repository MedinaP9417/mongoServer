import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: String,
    points: Number

});

export default mongoose.model('Course', CourseSchema);