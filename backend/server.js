const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv")
const server=express();

const connectToDB = require("./Config/mongoose-connect");
const productRoute=require('./routes/product')
const userRoute=require('./routes/user');
const orderRoute=require('./routes/order') 

dotenv.config();
server.use(express.json());
server.use(cors());

connectToDB();

/**GET ALL PRODUCTS */
server.use("/",productRoute);

/**GET USER DETAILS */ /**ADD USER DETAILS */
server.use("/",userRoute);

/**ADD NEW ORDER TO THE ORDER_LIST */
server.use("/",orderRoute);

server.listen(5000,()=>{
        console.log("server running on 5000")
});

