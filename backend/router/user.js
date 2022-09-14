const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();  
const userModel = require('../model/user');
const { generateToken } = require('../middleware/auth');
router.use(bodyParser());


router.post('/register', async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email: email});
        if(user){
            return res.status(400).json({message : "user already exists"});
        }else{
            const newUser = await userModel({
                email: email,
                password: password
            });
            await newUser.save();
            return res.status(201).json({message : "user registered successfully", token : generateToken(newUser)}); 
        }
        
    }catch(err){
        res.status(500).json({error : err});
    } 
});


