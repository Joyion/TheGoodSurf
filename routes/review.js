const express = require("express");
const router = express.Router();

// shows all types of reviews
router.get("/", function(req,res){
    res.render("reviews/index");
})


module.exports = router;