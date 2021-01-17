const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const userSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },  
    email:{
        type:String,
        required:true
    },
    order_history:{
        type:Array,
        required:true
    },
    addresses:{
        type:Array,
        required:true
    }
},
{
    versionKey:false
});

module.exports=mongoose.model('User',userSchema);