const express= require('express');
const router= express.Router();
const Alien= require('../models/alien');
const mongoose= require('mongoose')


router.post('/',(req,res,next)=>{

    const alien= new Alien({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
       age: req.body.age,
       native_planet:req.body.native_planet,
       weight:req.body.weight,
       height:req.body.height,
       language:req.body.language,
    });
    alien
    .save()
    .then(result=>{
        console.log(result);
    })
    .catch(err=> console.log(err));
    
    res.status(200).json({
        message:'Welcome to POST alien page',
        profile:alien
    })
    }
    ) ;


    module.exports= router;