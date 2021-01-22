const express=require('express');
const router=express.Router();
const nodemailer =require('nodemailer')
router.post("/mail",(req,res)=>{
    let transporter=nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:process.env.GMAIL_USERNAME,
            pass:process.env.GMAIL_PASSWORD
        }
    });
    let mailOptions={
        from:process.env.GMAIL_USERNAME,
        to:req.body.email,
        subject:req.body.message,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    margin:0px;
                    padding:0px;
        
                }
                .title_img{
            background-image: url("https://cdn.shopify.com/s/files/1/0974/7668/t/8/assets/page_banner_6_image.jpg");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            height: 320px;
            margin-bottom: 9px;
            position: relative;
            display: grid;
            place-items: center;
        }
        .title_img h1{
            color: #fff;
            text-transform: uppercase;
            margin-top: 0;
            margin-bottom: 0;
            font-size: 60px;
            text-align: center;
            position: relative;
            z-index: 1;
        }
        
        </style>
        </head>
        <body>
            <div style="display: grid;padding: 0px 0px 0px 20%;">
                <div style="max-width: 500px;">
                    <div style="
                text-align: center;
                background-image: radial-gradient(circle, #1c30eb, #004bed, #005eeb, #006ee6, #007cde, #0088dd, #0093d9, #009dd4, #00aad5, #00b6d1, #00c1c9, #00cbbe);">
                    <img src="https://cdn.shopify.com/s/files/1/0974/7668/t/8/assets/logo.png?v=10702048641065952398" width="200px" alt="">
                </div>
                <div style="border:4px solid #fff">
                   <h1>Hi ${req.body.name}</h1><br/>
                   ${req.body.message} 
                </div>
                <div class="title_img">
                    <div>
                        <h1>bars</h1>
                    </div>
                </div>
                <div>
                    <div style="display: flex;
                    text-align: center;
                    ">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-4" style="padding: 40px 0px; position: relative; border: 1px solid rgb(225, 225, 225);"><div class="BarPage_newproduct__mIytQ"></div><div class="BarPage_img_div__1tSkY"><div title="Taza dairy-free plant-based Almond Milk Chocolate"><img src="https://cdn.shopify.com/s/files/1/0974/7668/products/Product_Gingerbread_large.png" width="165px" alt="Image of Gingerbread Cookie Chocolate Bar"></div></div><h6 class="MuiTypography-root BarPage_bar_name__9lZHK MuiTypography-h6" title="Almond Milk Classic"><div to="">Gingerbread Cookie</div></h6><p>$3.75</p><p><span title="Buy"></span></p></div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-4" style="padding: 40px 0px; position: relative; border: 1px solid rgb(225, 225, 225);"><div class="BarPage_img_div__1tSkY"><div title="Taza dairy-free plant-based Almond Milk Chocolate"><img src="https://cdn.shopify.com/s/files/1/0974/7668/products/Almond_Milk_Classic_Shopify_large.jpg" width="165px" alt="Taza dairy-free plant-based Almond Milk Chocolate"></div></div><h6 class="MuiTypography-root BarPage_bar_name__9lZHK MuiTypography-h6" title="Almond Milk Classic"><div to="">Almond Milk Classic</div></h6><p>$6.99</p><p><span title="Buy"></span></p></div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-4" style="padding: 40px 0px; position: relative; border: 1px solid rgb(225, 225, 225);"><div class="BarPage_newproduct__mIytQ"></div><div class="BarPage_img_div__1tSkY"><div title="Taza dairy-free plant-based Almond Milk Chocolate"><img src="https://cdn.shopify.com/s/files/1/0974/7668/products/Almond_Milk_Cashew_Shopify_large.jpg" width="165px" alt="Taza dairy-free plant-based Almond Milk Chocolate with cashews"></div></div><h6 class="MuiTypography-root BarPage_bar_name__9lZHK MuiTypography-h6" title="Almond Milk Classic"><div to="">Almond Milk Crunchy Cashew</div></h6><p>$6.99</p><p><span title="Buy"></span></p></div>
                    </div>
                </div>
        
                <div 
                style="text-align: center;"
                >
                <a href="http://localhost:4000/">
                    
                    <Button 
                    style="
                    color: white;
                    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                    padding: 20px;
                    border-radius: 5px;
                    background: #74b9ff;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    ">VISIT OUR WEBSITE</Button>
        </a>
        </div>
        </div>
        
        </div>
        </body> 
        </html>
        `
    };

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            res.status(400).json(err)
        }
        else{
            res.status(200).json(info.response)
        }
    })

});
module.exports=router;