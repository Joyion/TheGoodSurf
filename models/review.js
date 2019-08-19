const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    product: {type: String, unique: true},
    imgUrl: {type: String, unique: true},
    description: {type: String},
    fullreview: {type: String}, 
    stars: {type: Number},
    comments: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
     }
    ],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
}

});

module.exports = mongoose.model("Review", reviewSchema);