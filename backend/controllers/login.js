
const User=require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds=10;
const jwt=require('jsonwebtoken');

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

exports.postLogin = (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then((user) => {
        if (!user) {
            res.sendStatus(404);
        }
        else {
            bcrypt.compare(req.body.password, user.password, function (err, response) {
                if (err) {
                    console.log(err);
                }
                else if (!response) {
                    res.sendStatus(401);
                }
                else {
                    var token = jsonwebtoken.sign({ id: user.id }, "secret");
                    res.json(token);
                    console.log(token);
                }
            });
        }
    });
};
