const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const alienSchema= new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        requird:true
    },
    age:{
        type:Number,
       
    },
    native_planet: {
        type:String,
       
    },
    weight: {
        type:Number,
      
    },
    height: {
        type:Number,
       
    },
    language: {
        type:String,
      
    }


});

module.exports=mongoose.model('Alien',alienSchema)
