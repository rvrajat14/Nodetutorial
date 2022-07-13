const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    designation: String,
    lastName: String
})

module.exports = mongoose.model('residents',residentSchema);