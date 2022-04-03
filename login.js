const path=require('path');
const express=require('express');
const router=express.Router();
const LoginController=require('../controllers/login.js');


router.post('/user/signup', LoginController.postSignup);
module.exports=router;