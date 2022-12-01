const mongoose = require('mongoose')

async function  connection()
{const data = await mongoose.connect('mongodb+srv://admin:admin@cluster0.jal2ogq.mongodb.net/?retryWrites=true&w=majority',(err,client)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Connection is succesful")
})
}


module.exports= connection;