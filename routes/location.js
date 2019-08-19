const express = require("express");
const router = express.Router();



// shows all locations
router.get("/", function(req, res){
    res.render("location/index");
})


module.exports = router;