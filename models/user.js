const mongoose = require("mongoose");
var userSchema = new mongoose.Schema =({
    username: {type: String, unique: true},
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
    ]
});

module.exports = mongoose.model("User", userSchema);