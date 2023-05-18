const mongoose=require("mongoose");
const About= mongoose.Schema({
    aboutme:String,
    aboutmeone:String,

    aboutmeimage:String,

});
module.exports=mongoose.model("about",About)