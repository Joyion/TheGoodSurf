const express = require("express");
const app = express();
app.set("view engine", "ejs");

const env = require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +"/public"));
console.log(__dirname);


// get routers
const port = process.env.PORT || 5000;
const reviewRoutes = require("./routes/review")
const beachRoutes = require("./routes/location");


// connect to db
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://joyion:joyion1234@testdb-roymm.mongodb.net/test?retryWrites=true&w=majority", 
{dbName: "TheGoodSurf", useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function(){
    console.log("Connected to Database");
});

const Beach = require("./models/beach");
const Review = require("./models/review");

const seedDb = require("./views/seed");
// seedDb();


console.log(process.env.GOOGLE_API);
app.use(function(req, res, next){
    res.locals.googleapi = process.env.GOOGLE_API;
    next();
});

// use routes 
app.use("/locations", beachRoutes);
app.use("/reviews", reviewRoutes);



app.get("/", function(req, res){
    res.render("landing");
});

app.get("*", function(req, res){
    res.send("you are lost");
});

app.listen(port, function(){
    console.log("Server Started on 5000");
})