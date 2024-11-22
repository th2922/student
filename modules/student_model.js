const mongoose =require('mongoose')


const studentschema = new mongoose.Schema(
   { name:{
        type : String,
        required :true
    },
   
    password:{
        type:Date,
        default: Date.now(),
        required: true,
    },
   
   
});
const student = mongoose.model('student',studentschema)
module.exports=student;