const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    bio: {type: String},
    favorites: [
        {
            locationID: String,
            locationName: String,
            locatationUrl: String,
        }
    ],

});

userSchema.plugin(passportLocalMongoose);



module.exports = mongoose.model("User", userSchema);