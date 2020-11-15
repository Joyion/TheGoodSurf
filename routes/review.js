const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const passport = require("passport")
const Comment = require("../models/comment");
const User = require("../models/user");


router.get("/", function(req,res){
    let products = []
    Review.find({productType: "Surfboard"}, function(err, surfboards){
        if(err){
            console.log(err)
        }
        else {
            products.push(surfboards);
            Review.find({productType:"Wetsuit"}, function(err, wetsuits){
                if(err){
                    console.log(err);
                }
                else {
                    products.push(wetsuits);
                    Review.find({productType: "Extras"}, function(err, extras){
                        if(err){
                            console.log(err)
                        }
                        else {
                            products.push(extras);
                            res.render("reviews/index", {products: products});
                        }
                    }).limit(3);
                }
            }).limit(3);
        }
    }).limit(3);
});



// shows all products of type
router.get("/:type", function(req,res){
    Review.find({productType: req.params.type}, function(err, products){
        if(err) {
            console.log(err);
        }
        else {
            res.render("product/index", {type: products});
        }
    })
    
});

// add new product to database
router.post("/product/new", isLoggedIn, function(req,res){

    console.log(req.user.id);
    let verified = false;
    // if(req.user.username = "admin"){
    //     verified= true;
    // }
    console.log(req.body);
   let r =  new Review({
        ...req.body.review,
        verified: false,
        author: req.user.id
      
    })
    r.save((err, r) => {
        console.log(r);
        res.redirect("/profile/" + req.user.id)
    })
    
});

//show form to add product
router.get("/product/new", isLoggedIn, function(req,res){
    res.render("product/new");
});

// show one product
router.get("/:type/:productId/", function(req,res){
    Review.findById(req.params.productId).populate("comments").populate("author").exec(function(err, review){
        if(err){
            console.log(err);
        }
        else {
            res.render("product/show", {review: review});
        }
    });


});

router.get("/:type/:productID/edit", function(req,res){
    res.send("Edit this product");
});


// route to update product info
router.put("/:type/:productID", function(req,res){

});

// route to delete products
router.delete("/:type/:productID", function(req,res){

});


router.post("/:type/:productID/comments", isLoggedIn, function(req,res){
    const comment = {text: req.body.newComment.trim()};
    console.log(comment + " " + req.user.username + " " + req.user._id);
a
    Review.findById(req.params.productID, (err, rv ) => {
        Comment.create(comment, function(err, c){
        if(err){

        }
        else{
            c.author.id = req.user._id;
            c.author.username = req.user.username;
            c.productName = rv.product;
            c.reviewLink = "/reviews/" + rv.type + "/" + rv._id;
            c.save((err, comment) => {
                if(err){

                }
                else{
                    rv.comments.push(c);
                    rv.save((err, review) => {
                         res.redirect("/reviews/" + req.params.type + "/" + req.params.productID);
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