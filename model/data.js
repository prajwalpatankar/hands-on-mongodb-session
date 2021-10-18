const mongoose = require('mongoose')

const mySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    rollno: {

        type: String,
    },
    division: {

        type: String,
    }
})

module.exports = mongoose.model('mySchema', mySchema)