const express = require("express");
const router = express.Router();

// shows all products of type
router.get("/", function(req,res){
    res.render("product/index");
})

// show one product
router.get("/:productId/", function(req,res){
    res.render("product/show");
});



module.exports = router;