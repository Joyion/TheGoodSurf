const mongoose = require("mongoose");
const beachSchema = new mongoose.Schema({
    name: {type: String},
    imgUrl: {type: String},
    area: {type: String},
    address: {type: String},
    description: {type: String},
    stars: {type: Number},
    verified: {type: Boolean}
});

module.exports = mongoose.model("Beach", beachSchema);