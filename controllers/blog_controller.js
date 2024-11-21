import blog_model from "../modules/blog_model.js"

export const blog = async( req , res, next)=> {
    return res.status(200).json({ message : "there is no blog yet"})
}

export const addblog =async( req ,res, next )=>{
    const {titel, descreption, image,dateANdTime} =req.body;

    const blog = new blog_model({ titel,descreption,image,dateANdTime});
    
     try{
         blog.save();
     }catch(err){
        console.log(`---------------------> ${err}`);
     }
     res.status(200).json({message:"your blog is saved"});
}