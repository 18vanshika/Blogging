const mongoose = require('mongoose');

const music=mongoose.Schema({
    icons:String,
    title:String,
    video:String,
    
    linkText:String,
    link:String
})

module.exports=mongoose.model("music",music)