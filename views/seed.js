const mongoose = require("mongoose");
const Beach = require("../models/beach")
const Review = require("../models/review")
// const User = require("../models/user");
// const Comment = require("../models/comment");




seedDb = function () {

    let beachlist = [
        {
            name: "Venice Beach",
            imgUrl: "https://images.unsplash.com/photo-1502836409737-232b37c6716d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "North America",
            address: "Los Angeles, CA",
            description: "A popular beach and often crowded",
            stars: 3,
            verified: true
        
        },
        {
            name: "Ocean Beach",
            imgUrl: "https://images.unsplash.com/photo-1494396550299-e4eb26401c8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "North America",
            address: "San Francisco, CA",
            description: "A beach with great surf but with many hazards",
            stars: 4,
            verified: true
        },
        {
            name: "Lower's",
            imgUrl: "https://images.unsplash.com/photo-1505448094153-38a7b12f6ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "North America",
            address: "San Diego, CA",
            description: "A popular beach in San Diego for exprienced surfers",
            stars: 5,
            verified: true
        },
        {
            name: "Paradise Beach",
            imgUrl: "https://images.unsplash.com/photo-1489211914964-32c31f87e86b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "South America",
            address: "Ecuardor",
            description: "A popular beach and often crowded",
            stars: 3,
            verified: true
        },
        {
            name: "Puerto Llama",
            imgUrl: "https://images.unsplash.com/photo-1470093384771-2d35ffe00073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "South America",
            address: "Peru",
            description: "A beach with great surf but with many hazards",
            stars: 4,
            verified: true
        },
        {
            name: "Ubatuba",
            imgUrl: "https://images.unsplash.com/photo-1519413016318-6b13004dc95b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "South America",
            address: "Brazil",
            description: "A popular beach in San Diego for exprienced surfers",
            stars: 5,
            verified: true
        },
        {
            name: "Hossegor",
            imgUrl: "https://images.unsplash.com/photo-1537890227200-9242fb416f3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "Europe",
            address: "France",
            description: "A popular beach and often crowded",
            stars: 3,
            verified: true
        },
        {
            name: "Peniche",
            imgUrl: "https://images.unsplash.com/photo-1558894982-440e80319372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "Europe",
            address: "Portugal",
            description: "A beach with great surf but with many hazards",
            stars: 4,
            verified: true
        },
        {
            name: "Mundaka",
            imgUrl: "https://images.unsplash.com/photo-1536394970594-4a617c58546d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            area: "Europe",
            address: "Spain",
            description: "A popular beach in San Diego for exprienced surfers",
            stars: 5,
            verified: true
        },
    ];

    Beach.deleteMany(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            Beach.create(beachlist, function (err, beaches) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(beaches)
                }
            });
        }
    })



    let reviewlist = [
        {
            product: "Pyzel Shortboard 6'6",
            company: "Pyzel",
            productType: "Surfboard",
            imgUrl: "https://images.pexels.com/photos/1667018/pexels-photo-1667018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "A fantastic surfboard in a good wave conditions",
            fullreview: "YEAH THIS BOARDS WAS AMAZING OMG I REALLY LIKE THIS BOARD",
            stars: 5,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "Swizzy Funboard 7'0",
            company: "CatchSurf",
            productType: "Surfboard",
            imgUrl: "https://images.pexels.com/photos/1924712/pexels-photo-1924712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "A fantastic surfboard in a good wave conditions",
            fullreview: "YEAH THIS BOARDS WAS AMAZING OMG I REALLY LIKE THIS BOARD",
            stars: 4,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "Cruizer Longboard 9'0",
            company: "Takayama",
            productType: "Surfboard",
            imgUrl: "https://images.unsplash.com/photo-1547668024-fb973b9839dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            description: "A fantastic surfboard in a good wave conditions",
            fullreview: "YEAH THIS BOARDS WAS AMAZING OMG I REALLY LIKE THIS BOARD",
            stars: 3,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "DragonFire",
            company: "Billabong",
            productType: "Wetsuit",
            imgUrl: "https://images.unsplash.com/photo-1473194654490-2deae9c24799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "A fantastic wetsuit in a cold water",
            fullreview: "Feels like you're being heated by dragon's breath ",
            stars: 5,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "Tropical",
            company: "RipCurl",
            productType: "Wetsuit",
            imgUrl: "https://images.unsplash.com/photo-1447348590098-cdf42d4b75ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "light wetsuit for cool conditions",
            fullreview: "AMAZING FOR THE COOL SPRING MORNINGS ",
            stars: 4,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "Heavy Rain",
            company: "Patagonia",
            productType: "Wetsuit",
            imgUrl: "https://images.pexels.com/photos/2570904/pexels-photo-2570904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "For the coldest conditions",
            fullreview: "Those who are willing to to surf freezing condiitons, need this wetsuit.",
            stars: 5,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "Sex Fantastic Wax",
            company: "SexWax",
            productType: "Extras",
            imgUrl: "https://images.pexels.com/photos/1409200/pexels-photo-1409200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "Amazing wax",
            fullreview: "Amazing wax. cheap price",
            stars: 4,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "Lifeguard",
            company: "WaterLife",
            productType: "Extras",
            imgUrl: "https://images.pexels.com/photos/1546118/pexels-photo-1546118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "A floatations for those heavy sets",
            fullreview: "Live Saving infloatbale rashguard for dangerous conditions",
            stars: 5,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7"
        },
        {
            product: "Acai Powder",
            company: "CleanLiving",
            productType: "Extras",
            imgUrl: "https://images.pexels.com/photos/1656544/pexels-photo-1656544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            description: "A good-tasting smoothie powder",
            fullreview: "Full Flavor and all you need to do this add water but a bit expensive.",
            stars: 3,
            verified: true,
            author: "5fb0d6ce49801fa3cd15d7b7",
        }
    ];

    Review.deleteMany(function (err) {
        if (err) {
            console.log(err)
        }
        else {
            Review.create(reviewlist, function (err, reviews) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(reviews);
                }
            });
        }

    });






    // end of function 
}

module.exports = seedDb;