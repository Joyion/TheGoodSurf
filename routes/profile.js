const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Comment = require("../models/comment")


router.get("/:id", isLoggedIn, (req, res) => {

    User.findById(req.params.id, (err, user) => {
        if(err){

        }
        else{
            Comment.find({"author": user._id}).populate("author").exec((err, comments) => {
                if(err){

                }
                else{
                console.log(user);
                console.log(comments);
                res.render("profile/index", {myprofile: user, comments: comments}) 
                }

            })
            
        }
    })

    
  
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}



module.exports = router;