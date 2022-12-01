const express= require("express")
const app= express();
const connection = require('./database/connection')
const morgan= require('morgan');
const bodyParser= require('body-parser')
const alienRoutes=require('./api/routes/aliens')
const mongoose= require('mongoose');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());


connection();
app.use('/alienprofile',alienRoutes)

app.use((req,res,next) =>{
   const error= new Error('Not Found');
   error.status=404;
   next(error);  
});

app.use((error,req,res,next)=>{
res.status(error.status || 500);
res.json({
    error:{message:error.message}
});
});

module.exports= app;