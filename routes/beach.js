const express = require("express");
const router = express.Router();
const Beach = require("../models/beach");

// shows all beaches of area
router.get("/", function(req,res){
    res.render("beach/index");
});


// shows one beach
router.get("/:id", function(req,res){
    Beach.findById(req.params.id, function(err, beach){
        if(err){
            console.log(err)
        }
        else {
            console.log(beach);
            res.render("beach/show", {beach: beach});
        }
    })
    
});



module.exports = router;