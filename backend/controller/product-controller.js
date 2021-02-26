const Bar=require("../models/bar");
const Bark = require("../models/bark");
const Disc = require("../models/disc");
const Treat = require("../models/treat");


const fetchAllBarChocolate=(req,res)=>{
    Bar.find()
   .then((bars)=>res.status(200).json(bars))  
   .catch(err=>res.status(400).json("Error:" + err));
}
const fetchAllTreat=(req,res)=>{
    Treat.find()
   .then((treats)=>res.status(200).json(treats))  
   .catch(err=>res.status(400).json("Error:" + err));
}
const fetchAllDiscs=(req,res)=>{
    Disc.find()
   .then((discs)=>res.status(200).json(discs))  
   .catch(err=>res.status(400).json("Error:" + err));
}
const fetchAllBark=(req,res)=>{
    Bark.find()
   .then((bark)=>res.status(200).json(bark))  
   .catch(err=>res.status(400).json("Error:" + err));
}

const fetchOneBarChocolate= async(req,res)=>{
    await Bar.findById({_id:req.params._id})
       .then((bars)=>res.status(200).json(bars))  
      .catch(err=>res.status(400).json("Error:" + err));
}
const fetchOneTreat=async (req,res)=>{
   console.log(req.params._id)

  await  Treat.findById({_id:req.params._id})
   .then((treats)=>{
      res.status(200).json(treats)})  
   .catch(err=>{
      res.status(400).json("Error:" + err)});
}
const fetchOneDisc=async (req,res)=>{
   await Disc.findById({_id:req.params._id})
   .then((discs)=>res.status(200).json(discs))  
   .catch(err=>res.status(400).json("Error:" + err));
}
const fetchOneBark=async(req,res)=>{
   await Bark.findById({_id:req.params._id})
   .then((bark)=>res.status(200).json(bark))  
   .catch(err=>res.status(400).json("Error:" + err));
}


module.exports={fetchOneBark,fetchOneDisc,fetchOneTreat,fetchAllBarChocolate,fetchAllTreat,fetchAllDiscs,fetchAllBark,fetchOneBarChocolate};
