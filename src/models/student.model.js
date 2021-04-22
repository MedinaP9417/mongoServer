import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    yearOfBirth: Number,
    address: String
});

export default mongoose.model('Student', StudentSchema);