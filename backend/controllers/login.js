
const User=require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds=10;


exports.postSignup= (req, res) =>{
    User.findOne({where:{email:req.body.email}})
    .then(user =>{
       if(!user){
        bcrypt.hash(req.body.password, saltRounds, (err, hash) =>{
        User.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:hash
        })
        })
        res.sendStatus(201);
     }
     else 
      res.sendStatus(208);
    })
    .catch(err => console.log(err));
};
