
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const notesSchema= new Schema({
    titel:{
        type:String,
        required: true,
    },
    descreption:{
        type: String,
        required:true,
    },
    
}) 

export default mongoose.model("Notes",notesSchema);