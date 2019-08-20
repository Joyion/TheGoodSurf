const mongoose = require("mongoose");
const Beach = require("../models/beach")
const Review = require("../models/review")
// const User = require("../models/user");
// const Comment = require("../models/comment");




seedDb = function(){

let beachlist = [
    {
        name: "Venice Beach",
        imgUrl: "",
        area: "North America",
        address: "Los Angeles, CA",
        description: "A popular beach and often crowded",
        stars: 3,
        verified: true
    },
    {
        name: "Ocean Beach",
        imgUrl: "",
        area: "North America",
        address: "San Francisco, CA",
        description: "A beach with great surf but with many hazards",
        stars: 4,
        verified: true
    },
    {
        name: "Lower's",
        imgUrl: "",
        area: "North America",
        address: "San Diego, CA",
        description: "A popular beach in San Diego for exprienced surfers",
        stars: 5,
        verified: true
    }
];

Beach.create(beachlist, function(err, beaches){
    if(err){
        console.log(err);
    }
    else {
        console.log(beaches)
    }
});

let reviewlist = [
    {
        product: "Pyzel Shortboard 6'6",
        company: "Pyzel",
        productType: "Sufboard",
        imgUrl: "",
        description: "A fantastic surfboard in a good wave conditions",
        fullreview: "YEAH THIS BOARDS WAS AMAZING OMG I REALLY LIKE THIS BOARD",
        stars: 5,
        verified:true 
    },
    {
        product: "Swizzy Funboard 7'0",
        company: "CatchSurf",
        productType: "Sufboard",
        imgUrl: "",
        description: "A fantastic surfboard in a good wave conditions",
        fullreview: "YEAH THIS BOARDS WAS AMAZING OMG I REALLY LIKE THIS BOARD",
        stars: 5,
        verified:true
    },
    {
        product: "Cruizer Longboard 9'0",
        company: "Takayama",
        productType: "Surfboard",
        imgUrl: "",
        description: "A fantastic surfboard in a good wave conditions",
        fullreview: "YEAH THIS BOARDS WAS AMAZING OMG I REALLY LIKE THIS BOARD",
        stars: 5,
        verified:true
    }
];

Review.create(reviewlist, function(err, reviews){
    if(err){
        console.log(err);
    }
    else {
        console.log(reviews);
    }
});



// end of function 
}

module.exports = seedDb;