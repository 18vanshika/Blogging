const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser=require('body-parser')
const routes = require('./routes/main');
const Detail = require("./models/detail");
const Music = require("./models/music");
const Create=require("./models/contact");
const About=require("./models/about");

app.use(express.json());
app.use('/static', express.static("public"));
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use('', routes);

app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");

mongoose.connect('mongodb://localhost:27017/complete_website', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

 /*Music.create([
      {

        icon:'&#x2764;',
        title:'Darkside',
        video:'/static/images/darkside.mp4',
        
      },
      {
        icon:'&#x2764;',
        title:'Hook up Song',
        video:'/static/images/hook.mp4',
      },
      {
        icon:'&#x2764;',
        title:'Tu hai wahi',
        video:'/static/images/tuhai.mp4',
      },

    ])*/

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to MongoDB");

    /*Detail.create({
    brandName:"Breathe_in.Beats_out",
    links:[
      {
        label:"Home",
        url:"/"
      },
      {
        label:"About",
        url:"/about"
      }
    ]
  })*/

 /* About.create({
    aboutme:"Hello ! I'm Vanshika Jain, a BTech student. In my free time, I sing and upload covers on YouTube and Instagram.",
    aboutmeone:"Greetings from #breathe_in.Beats_out. I'll be publishing my covers here as well.I hope you enjoy my covers and will follow my Instagram and YouTube accounts.",

    aboutmeimage:"/static/images/me.jpg",
  })*/

});


app.listen(process.env.PORT || 5556, () => {
  console.log("server started");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("server started");
});
