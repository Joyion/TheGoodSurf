const express = require("express");
const router = express.Router();

// shows all beaches of area
router.get("/", function(req,res){
    res.render("beach/index");
})

// shows one beach
router.get("/:id", function(req,res){
    res.render("beach/show");
});



module.exports = router;