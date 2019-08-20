const express = require("express");
const router = express.Router();
const Beach = require("../models/beach");


// shows all locations
router.get("/", function(req, res){
    Beach.find(function(err, beaches){
        if(err){
            console.log(err);
        }
        else {
            res.render("location/index", {beaches: beaches});
        }

    }).limit(3);
// end of route
    });


module.exports = router;