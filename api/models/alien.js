const mongoose=require('mongoose')

const alienSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        requird:true
    },
    age:{
        type:Number,
        requird:true
    },
    native_planet: {
        type:String,
        requird:true
    },
    weight: {
        type:Number,
        requird:true
    },
    height: {
        type:Number,
        requird:true
    },
    language: {
        type:String,
        requird:true
    },


})

module.exports=mongoose.model('Alien',alienSchema)
