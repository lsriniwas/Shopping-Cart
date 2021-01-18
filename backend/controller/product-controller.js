const Bar=require("../models/bar")


const fetchAllBarChocolate=(req,res)=>{
    Bar.find()
   .then((bars)=>res.status(200).json(bars))  
   .catch(err=>res.status(400).json("Error:" + err));
}

module.exports=fetchAllBarChocolate;
