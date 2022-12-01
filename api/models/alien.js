const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const alienSchema= new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
        
       
    },
    native_planet: {
        type:String,
        required:true
       
    },
    weight: {
        type:Number,
        required:true
      
    },
    height: {
        type:Number,
        required:true
       
    },
    language: {
        type:String,
        required:true
      
    }


});

module.exports=mongoose.model('Alien',alienSchema)
