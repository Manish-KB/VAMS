const express= require('express');
const router= express.Router();
const Alien= require('../models/alien');
const mongoose= require('mongoose')


router.post('/createprofile',(req,res,next)=>{

    const newAlien= ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
       age: req.body.age,
       native_planet:req.body.native_planet,
       weight:req.body.weight,
       height:req.body.height,
       language:req.body.language,
    });
    const alien=new Alien(newAlien);
    alien.save()
    res.json(alien)
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


 

 router.get('/getprofile/:id',(req,res,next)=>{
    const id= req.params.id;
    Alien.findById(id)
    .exec()
    .then(doc =>{
     console.log(doc);
     res.send(500).json(doc);
    })
    .catch(err=>console.log(err));
    res.json({
        error:err
    })
 })   


 router.delete('/deleteprofile/:id',(req,res,next)=>{
 const id= req.params.id;
 Alien.remove({_id:id})
 .exec()
 .then(result => {
    res.status(200).json(result);
 })
 .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
 });

 })

 router.patch("/updateprofile/:id",(req,res,next)=>{
    const id= req.params.id;
    const updateOps= {};
    for(const ops of req.body){
        updateOps[opspopName]= value.value;
    }
    Alien.update({_id:id},{$set:updateOps})
    .exec()
    .then(result => {
        res.status(200).json(result);
     })
     .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
     });
 })



 module.exports= router;