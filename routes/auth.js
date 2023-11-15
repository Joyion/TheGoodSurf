import express from "express";
export const authRouter = express.Router();
import passport from "passport";


import User from "../models/user.js";
// login 
authRouter.get("/login", isLoggedOut, (req, res) => {
    let isError = false;
    if(req.session.messages) {
        console.log(req.session.messages.length);
        isError = true;
    }
    res.render("auth/login", {isError: isError, errorMsg : req.session.messages})
})

let num = 0;
// logout
authRouter.post("/login", isLoggedOut, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureMessage: "Failed to Authenticate " + num++
}), (req, res) => {
    res.render("auth/login", {isError: false, errorMsg : "Username and/or Password is not correct" })
})




// register
authRouter.get("/register", (req, res) => {
    res.render("auth/register", {isError: false, errorMsg : "" })
})

authRouter.post("/register", isLoggedOut, async (req, res) => {

    User.register(new User({ username : req.body.username, email: req.body.email }), req.body.password, function(err, account) {
        if (err) {
            return res.render('auth/register', {isError: true, errorMsg : err});
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
})

// logout

//TODO Fix error for logout to redirect and give error message
authRouter.post("/logout", isLoggedIn, (req, res) => {
    req.logout((err)=> {
        if(err) {
            res.send("Error Logout");
        } else {
            res.redirect("/");
        }
    })
})

//TODO Remove console log
export function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("Already logged In");
    res.redirect("/auth/login");
}

export function isLoggedOut(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    console.log("Already Logged Out")
    res.redirect("/auth/login");
}

