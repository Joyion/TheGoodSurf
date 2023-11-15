import express from 'express';
const app = express();
import 'dotenv/config'
const port = process.env.PORT;
const secret = process.env.SECRET;

// EJS configuration
import ejs from "ejs";
app.set('view engine', 'ejs');
// Use public for assets with ejs
app.use(express.static( "public" ));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Database MongoDB
import mongoose from 'mongoose';


import session from 'express-session';
import Sqlitestore from "connect-sqlite3"

// passport authentication
import passport from 'passport';
import LocalStrategy from "passport-local"
import passportLocalMongoose from "passport-local-mongoose";

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60 * 60 * 1000}
}));
app.use(passport.initialize());
app.use(passport.session())



connectToDB().catch(err => {
    
    console.log(err)
})

async function connectToDB() {
    await mongoose.connect("mongodb://localhost:27017/TheGoodSurf");
    console.log("Database Started");
}


// Database Schemas
import Location from './models/location.js';
import Product from './models/product.js';
import User from './models/user.js';


const venice = new Location({name: "Venice Pier", locationArea: "North America - Pacific"});
const santacruz = new Location({name: "Santa Cruz", locationArea: "North America - Pacific"});
const pacifica = new Location({name: "Pacifica", locationArea: "North America - Pacific"})
const surfboard = new Product({name: "Pyzel Surfboard", brandName: "Pyzel"})
const cup = new Product({name: "Solid Cup", brandName: "Solid"})
const wetsuit = new Product({name: "Titan Wetsuit", brandName: "Poseidon"})


try {
    await Location.deleteMany();
    await Product.deleteMany();
    await venice.save();
    await santacruz.save();
    await pacifica.save();
    await surfboard.save();
    await cup.save();
    await wetsuit.save();
} catch(err) {
    console.log(err);
}



// SET AUTHORIZATION
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function addAuthentication(req, res, next){
    res.locals.isAuth = req.isAuthenticated();
    next();
}

app.use(addAuthentication)



// SET UP ROUTES
import { authRouter } from './routes/auth.js';
import { locationRouter } from './routes/location.js';
import {productRouter} from "./routes/product.js";
import { profileRouter  } from './routes/profile.js';


app.use("/auth", authRouter);
app.use("/location", locationRouter);
app.use("/product", productRouter);
app.use("/profile", profileRouter);







// LANDING PAGE
app.get('/', async (req, res) => {
    try {
        const locations = await Location.find({});
        console.log(locations);
        res.render("landing", {locations: locations});
        // res.render("landing")


    } catch (err) {
        console.log(err);
        res.render("landing");
    }

  })


app.get('*',(req, res) => {
    res.render("notFound");
} )


  
app.listen(port, () => {
    console.log(`The Good Surf listening on port ${port}`)
})