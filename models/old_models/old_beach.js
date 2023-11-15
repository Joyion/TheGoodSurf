const mongoose = require("mongoose");
const beachSchema = new mongoose.Schema({
    name: {type: String},
    imgUrl: {type: String},
    area: {type: String},
    address: {type: String},
    description: {type: String},
    stars: {type: Number},
    verified: {type: Boolean},
    comments: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
     }
    ],
});

module.exports = mongoose.model("Beach", beachSchema);