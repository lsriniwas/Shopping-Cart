const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors");
const dotenv=require("dotenv")

const Bar=require("./models/bar")
const Treat=require("./models/treat")
const User=require("./models/user")

const server=express();

dotenv.config();

server.use(express.json());
server.use(cors());

mongoose.connect(
        process.env.MONGO_ATLAS_URI,
        {
                useNewUrlParser:true,
                useUnifiedTopology:true,
                useCreateIndex:true
        },
        (err)=>{
          if(err){
                  console.log("Error connecting the database",err);
          }
          else{
                  console.log("Data successfully connected")
          }
        }
);

server.get("/collections/amaze-bars",(req,res)=>{
         Bar.find()
        .then((bars)=>res.status(200).json(bars))  
        .catch(err=>res.status(400).json("Error:" + err));
});

server.post("/account/register",(req,res)=>{
        User.find({email:req.body.email})
        .then(data=>
                {       
                        if(data.length===0)
                       
                       { const newUser=new User(req.body)
                        newUser
                        .save()
                        .then(()=> res.status(200).send({messsage:'Registeration Successful',userInfo:newUser}))
                       }
                        else{
                         console.log(data)
                         res.status(400).send({Error:"User already exist"})    
                        }
                })
        .catch(err=>{
                console.log(err)
                res.status(400).send(err)})
 })      
 

server.get("/user/profile",(req,res)=>{

        console.log(req.body)
        
        User.find({email:req.body.email,password:req.body.password})
        .then(data=>{
                if(data.length!=0){
                return res.status(200).json(data)
                }
                return res.status(404).send({Error:'User Not Found'})                
                })
        .catch(err=>res.status(400).send("error",err))
})
server.listen(5000,()=>{
        console.log("server running on 5000")
});

