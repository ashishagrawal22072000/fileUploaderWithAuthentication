const mongoose = require('mongoose');

const userSchema = new Schema({
    email : {
        type: String,
        required: true
    },
    password : {    type: String, required: true },
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;