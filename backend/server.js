const bars=require("./Bars/bars");
const express=require("express");
const server=express();
const cors=require("cors");
server.use(express.json());
server.use(cors());
server.get("/collections/amaze-bars",(req,res)=>{
        res.status(200).send(bars);
});
server.listen(5000);
