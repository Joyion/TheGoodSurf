const express = require("express");
const app = express();
app.set("view engine", "ejs");
const path = require("path");
//const env = require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use("/public",express.static(__dirname + "/public"));

if(process.env.NODE_ENV !== "development"){
   
  const dotenv = require('dotenv').config({path: path.join(__dirname, ".env")})
}



// get routers
const port = process.env.PORT || 5000;
const reviewRoutes = require("./routes/review")
const beachRoutes = require("./routes/location");



// connect to db
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, 
{dbName: "TheGoodSurf", useNewUrlParser: true, 
useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function(){
    console.log("Connected to Database");
});

const Beach = require("./models/beach");
const Review = require("./models/review");

//const seedDb = require("./views/seed");
// seedDb();



// app.use(function(req, res, next){

//     next();
// });

// use routes 
app.use("/locations", beachRoutes);
app.use("/reviews", reviewRoutes);



app.get("/", function(req, res){
    
    Beach.find({name: ["Venice Beach", 'Ubatuba', 'Mundaka']}, function (err, beaches){
        if(err){
            console.log(err);
        }
        else {
            Review.find({company: ['Pyzel', 'RipCurl', 'CleanLiving']}, function(err, reviews){
                if(err){
                    console.log(err)
                }
                else {
                  res.render("landing", {beaches: beaches, reviews: reviews});   
                }
            });
         
        }
    })
   
});

app.get("*", function(req, res){
    res.redirect("/")
});

app.listen(port, function(){
    console.log("The Good Surf at " + console.log(port));
})