const express = require("express");
const router = express.Router();
const Review = require("../models/review");

// shows all types of reviews
router.get("/", function(req,res){
    let surfboards, wetsuits, extras;
    Review.find({productType: "Surfboard"}, function(err, surfboardlist){
        if(err){
            console.log(err);
        }
        else {
            surfboards = surfboardlist;
            Review.find({productType: "Wetsuit"}, function(err, wetsuitlist){
                if(err) {
                    console.log(err);
                }
                else {
                    wetsuits = wetsuitlist; 
                    Review.find({productType: "Extras"}, function(err, extraslist){
                        if(err){
                            console.log(err);
                        }
                        else {
                            extras = extraslist;
                            console.log(wetsuits, surfboards, extras);
                            res.render("reviews/index", {wetsuits: wetsuits, surfboards: surfboards, extras: extras})
                        }
                    }).limit(4);
                }
               
            }).limit(3);
        }

    }).limit(3);
})


module.exports = router;