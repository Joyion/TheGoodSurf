const express = require("express");
const app = express();
app.set("view engine", "ejs");

const env = require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +"/public"));
console.log(__dirname);

const port = process.env.PORT || 5000;
const locationRoutes = require("./routes/location");
const reviewRoutes = require("./routes/review")
const beachRoutes = require("./routes/beach");
const productRoutes = require("./routes/product");

console.log(process.env.GOOGLE_API);
app.use(function(req, res, next){
    res.locals.googleapi = process.env.GOOGLE_API;
    next();
});


app.use("/location", locationRoutes);
app.use("/location/:area", beachRoutes);
app.use("/reviews", reviewRoutes);
app.use("/reviews/:type", productRoutes);


app.get("/", function(req, res){
    res.render("landing");
});

app.get("*", function(req, res){
    res.send("you are lost");
});

app.listen(port, function(){
    console.log("Server Started on 5000");
})