const express = require("express");
const router = express.Router();
const Review = require("../models/review");
// shows all products of type
router.get("/", function(req,res){
    res.render("product/index");
});

// add new product to database
router.post("/", function(req,res){
    
});

//show form to add product
router.get("/new", function(req,res){
    res.send("This the form for products");
});

// show one product
router.get("/:productId/", function(req,res){
    Review.findById(req.params.productId, function(err, review){
        if(err){
            console.log(err);
        }
        else {
            res.render("product/show", {review: review});
        }
    });


});

router.get("/:productID/edit", function(req,res){
    res.send("Edit this product");
});


// route to update product info
router.put("/:productID", function(req,res){

});

// route to delete products
router.delete("/:productID", function(req,res){

});


module.exports = router;