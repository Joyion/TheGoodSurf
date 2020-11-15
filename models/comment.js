const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    productName: {type: String, default: "none"},
    reviewLink: {type: String, default: "none"},
    beach: {type: String, default: "none"},
    beachLInk: {type: String, default: "none"},
    text: { type: String },
    author: 
        {
            
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            
       
        },
    date: {type: Date, default: Date.now},
    like: {type: Number, default: 0},
    dislike: {type: Number, default: 0},

})

module.exports = mongoose.model("Comment", commentSchema);