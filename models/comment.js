const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: { type: String },
    author: 
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: { type: String }
        },
    date: {type: Date, default: Date.now},
    like: {type: Number, default: 0},
    dislike: {type: Number, default: 0},

})

module.exports = mongoose.model("Comment", commentSchema);