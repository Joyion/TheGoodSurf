const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    bio: {type: String},
    favorites: [
        {
            locationID: String,
            locationName: String
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);



module.exports = mongoose.model("User", userSchema);