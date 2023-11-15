import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {type: String, requried: true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {type: Date, default: Date.now}
})