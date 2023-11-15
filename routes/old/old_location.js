const express = require("express");
const router = express.Router();

const Beach = require("../models/beach");

// landing page for locations
router.get("/", function(req, res){
    let locations = [];

    Beach.find({area: "North America"}, function(err, northAmerica){
        if(err){
            console.log(err);
        }
        else {
            locations.push(northAmerica);
            Beach.find({area: "South America"}, function(err, southAmerica){
                if(err) {
                    console.log(err);
                }
                else {
                    locations.push(southAmerica);
                    Beach.find({area: "Europe"}, function(err, europe){
                        if(err){

                        }
                        else {
                        locations.push(europe);
                        res.render("location/index", {locations: locations})

                        }
                    }).limit(3);
                }

            }).limit(3);
        }

    }).limit(3);
// end of route
    });

// shows all beaches of area
router.get("/:area", function(req,res){
    Beach.find({area: req.params.area}, function(err, beaches){
        if(err){
            console.log(err)
         
        }
        else {
           
           res.render("beach/index", {beaches: beaches});
        }
    });
   
});


// shows one beach
router.get("/:area/:id", function(req,res){
    Beach.findById(req.params.id).populate("comments").populate("author").exec((err, beach) => {
        if(err){
            console.log(err)
        }
        else {
           res.render("beach/show", {beach: beach});
        }
    })
    
});


// add comment 
router.post("/:area/:id/comments", isLoggedIn, function(req,res){
    const comment = {text: req.body.newComment.trim()};
    console.log(comment + " " + req.user.username + " " + req.user._id);

    Beach.findById(req.params.id, (err, b ) => {
        Comment.create(comment, function(err, c){
        if(err){

        }
        else{
            c.author.id = req.user._id;
            c.author.username = req.user.username;
            c.beach = b.name;
            c.reviewLink = "/locations/" + b.area + "/" + b._id;
            c.save((err, comment) => {
                if(err){

                }
                else{
                    b.comments.push(c);
                    b.save((err, review) => {
                         res.redirect("/locations/" + req.params.area + "/" + req.params.id);
                    });
                   
                }

            });
        }
    })
    })
    
    
})


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



module.exports = router;