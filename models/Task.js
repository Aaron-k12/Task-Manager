const mongoose = require('mongoose')
const { Schema, model } = mongoose

/** Function is used to create schema (table heads) in the mongodb */
const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must be provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = model('Task', TaskSchema)