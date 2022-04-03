const path = require('path');

 const express =require('express');
  const app=express();

  const dotenv =require('dotenv');
  dotenv.config({ path: path.resolve(__dirname, 'util/.env') })

  const bodyParser =require('body-parser');
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(bodyParser.json());

const sequelize =require ('./util/database');
  const User =require ('./models/user');

  const cors =req('cors');
  const helmet =req( 'helmet');
  const loginRoutes =require('./routes/login');

  app.use(helmet());
  app.use(cors());

 
  app.use(loginRoutes);


  sequelize
   .sync()
   .then(() =>{
   }).catch(err => console.log(err));

 
   app.listen(4000);