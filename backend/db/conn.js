const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ashish:ashish1234@cluster0.vcxccsn.mongodb.net/?retryWrites=true&w=majority").then((res) =>{
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log('Failed to connect to MongoDB');
})