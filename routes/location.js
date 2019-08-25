const express = require("express");
const router = express.Router();
const request = require('request');
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
    Beach.findById(req.params.id, function(err, beach){
        if(err){
            console.log(err)
        }
        else {
           res.render("beach/show", {beach: beach});
        }
    })
    
});



module.exports = router;