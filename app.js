const express= require("express")
const app= express();
const morgan= require('morgan');
const bodyParser= require('body-parser')
const alienRoutes=require('./api/routes/aliens')

const mongoose= require('mongoose');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.jal2ogq.mongodb.net/?retryWrites=true&w=majority')
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