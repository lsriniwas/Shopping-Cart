const Joi=require('joi')

const userSignUpSchema=(data)=>{
    const schema=Joi.object({
        id:Joi.string().required(),
        first_name:Joi.string().required(),
        last_name:Joi.string().required(),
        email:Joi.string().required().email(),
        password:Joi.string().min(6).required(),
        order_history:Joi.array(),
        addresses:Joi.array()
    })
    return schema.validate(data)
}

const loginSchema=(data)=>{
    const schema=Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string()
    })

    return schema.validate(data);
}


module.exports={userSignUpSchema,loginSchema}
