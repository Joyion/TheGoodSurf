const express = require("express");
const app = express();
app.set("view engine", "ejs");
const path = require("path");
const env = require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));
// const dotenv = require('dotenv').config({ path: path.join(__dirname, ".env") })


if (process.env.NODE_ENV !== "development") {

    const dotenv = require('dotenv').config({ path: path.join(__dirname, ".env") })
}

console.log(process.env.NODE_ENV);

// get routers
const port = process.env.PORT || 9090;
const reviewRoutes = require("./routes/review");
const beachRoutes = require("./routes/location");
const profileRoutes = require("./routes/profile");


// connect to db
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE,
    {
        dbName: "TestSurf", useNewUrlParser: true,
        useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
    console.log("Connected to Database");
});

const Beach = require("./models/beach");
const Review = require("./models/review");
const User = require("./models/user");
const Comment = require("./models/comment");

const seedDb = require("./views/seed");
seedDb();

app.use(require("express-session")({
    secret: "See You Space Cowboy",
    resave: false,
    saveUninitialized: false
}));

// SET UP PASSPORT
const passport = require("passport")
const LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// send user TEMPLATE TO ALL PAGES
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

// use routes 
app.use("/locations", beachRoutes);
app.use("/reviews", reviewRoutes);
app.use("/profile", profileRoutes);
// authorization routes

app.get('/register', function (req, res) {
    res.render("auth/register", {errorUser: "none", errorPassword: "none"});
})

app.post('/register', isLoggedOut, function (req, res) {
    let p = req.body.password;
    if (req.body.username.length >= 3 && req.body.password.length >= 7) {
        let p = req.body.password;
        if (p.includes("#") || p.includes("@") || p.includes("!") || p.includes("&") || p.includes("*") || p.includes("$")) {
            const newUser = { username: req.body.username }

            User.register(newUser, req.body.password, function (err, user) {
                if (err) {
                    return res.render("auth/register", {errorUser: "none", errorPassword: "none"})
                }
                passport.authenticate("local")(req, res, function () {
                    res.redirect("/");
                });

            })
        }
        else{
            res.render("auth/register", {errorUser: "none", errorPassword: "Password must be 7 characters in length and contain one of these special characters like !@#$%&*"})
        }

    }
    else{
        res.render("auth/register", {errorUser: "Username must be 3 characters in length.", errorPassword: "Password must be 7 characters in length and contain one of these special characters like !@#$%&*"})

    }


})

// app.get('/login', isLoggedOut, function (req, res) {
//     res.render("auth/login");
// })

// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login"
// }), function (req, res) {

// })

// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/")
// })


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function isLoggedOut(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}








app.get("/", function (req, res) {

    res.send("Lading Page");

    // Beach.find({ name: ["Venice Beach", 'Ubatuba', 'Mundaka'] }, function (err, beaches) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         Review.find({ company: ['Pyzel', 'RipCurl', 'CleanLiving'] }, function (err, reviews) {
    //             if (err) {
    //                 console.log(err)
    //             }
    //             else {
    //                 res.render("landing", { beaches: beaches, reviews: reviews });
    //             }
    //         });

    //     }
    // })

});

app.get("*", function (req, res) {
    res.redirect("/")
});

app.listen(port, function () {
    console.log("The Good Surf at " + port);
})