const User=require('../models/User');
const Message=require('../models/Message');
const jwt=require('jsonwebtoken');
function parseJwt(token) {
    var base64Payload = token.split('.')[1];
    let payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
  }

exports.PostMessages=(req, res) =>{
    const message=req.message;
    let payload=parseJwt(req.headers.authorization);
    Message.create({message:message, userId:payload.id})
    .then(res =>{
        console.log(res);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
}

exports.GetMessages=(req, res) =>{
    const data=[];
  Message.findAll({where:{ id:{[Op.gt]:req.query.messageId}}})
 .then(messages =>{

    messages.forEach((msg) => {
   User.findByPk(msg.userId).then(user =>{
       const token=jwt.sign({ id: user.id }, "secret");
        const obj= {
        name:user.name,
        message:msg.message,
        token:token
        } ; console.log(obj.token);
        data.push(obj); 
       }); 
    }); 
    }); setTimeout(() =>{ 
        res.json(data); 
    },1000);
}
