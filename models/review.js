const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    product: {type: String},
    company: {type: String},
    productType: String,
    imgUrl: {type: String},
    description: {type: String},
    fullreview: {type: String}, 
    stars: {type: Number},
    companyWebsite: String,
    verified: Boolean
//     comments: [ {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment"
//      }
//     ],
//     author: {
//         id: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User"
//         }
// }

});

module.exports = mongoose.model("Review", reviewSchema);