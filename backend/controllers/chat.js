const User=require('../models/User');
const Message=require('../models/Message');

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