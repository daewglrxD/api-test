const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    grade: {
        type: String,
        required: [true, "Grade is required"]
    }, 
    present: {
        type: Boolean,
        default: true,
    }
})

const Student = mongoose.model('student', StudentSchema)
module.exports = Student