const express = require("express");
const {route} = require('express/lib/application')
const Detail =  require("../models/Detail");
const slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/contact");
// const Gallery = require("../models/Gallery")


const routes  = express.Router();



routes.get("/", async (req,res)=>{
    const details = await Detail.findOne({"_id":"64d92dc59206c23f4ff4a9d7"})
    const slides = await slider.find()

    // console.log(slides)
    // console.log(details)
const services  = await Service.find()    
    // const services = await Service.find()

    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })  
})




routes.get("/gallery", async (req,res)=>{
const details = await Detail.findOne({"_id":"64d92dc59206c23f4ff4a9d7"})
// const gallery =  Gallery.findOne("_id:");

    res.render("gallery",{
        details:details,   
        //  gallery:gallery
    })
})

routes.get("/about", async (req,res)=>{
    const details = await Detail.findOne({"_id":"64d92dc59206c23f4ff4a9d7"})
    // const gallery =  Gallery.findOne("_id:");
    
        res.render("about",{
            details:details,   
            //  gallery:gallery
        })
    })

routes.post("/process-contact-form", async (request,response)=>{

console.log("form is submitted")
console.log(request.body)
//save the data to db
try{
const data = await Contact.create(request.body)
console.log(data)
response.redirect("/")
}catch(e){
    console.log(e)
    response.redirect("/")
}
})

module.exports = routes