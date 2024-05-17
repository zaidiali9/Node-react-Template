const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    }
})


const usermodel = mongoose.model('user', userSchema);

module.exports = usermodel;