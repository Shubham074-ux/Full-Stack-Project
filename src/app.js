const express = require("express");
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main');
const Detail = require("./models/Detail")
const Slider = require('./models/Slider')
const Service = require("./models/Service")
// const Gallery = require("./models/Gallery")
const bodyParser  = require("body-parser")
// const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)

//template engine 

app.set('view engine','hbs')
app.set("views", "views")

hbs.registerPartials("views/partials");

//db connection
// const mongoose = require('mongoose');
// const mongoose = require('mongoose');
const mongoose = require('mongoose');

main().catch(err=>console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/website_tut');
console.log("db connected");


// Gallery.create([


// {
//     back:'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600'
// }

// ])



// Service.create([
// {
//     icon:'fab fa-accusoft',
//     title:'provide best guide',
//     description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia et eos ipsam ut?',
//     linkText:"https://www.shubhamsolutions.com",
//     link:"Check"                              
// },
    
// {
//     icon:'fab fa-affiliatetheme',
//     title:'gives good comparison',
//     description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia et eos ipsam ut?',
//     linkText:"https://www.shubhamsolutions.com",
//     link:"compare"
// },

// {
//     icon:'fab fa-affiliatetheme',
//     title:'gives good comparison',
//     description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia et eos ipsam ut?',
//     linkText:"https://www.shubhamsolutions.com",
//     link:"compare"

// }

// ])


}

  
app.listen(process.env.PORT|2000,()=>{
    console.log("server started");
})