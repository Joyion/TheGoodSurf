import mongoose from "mongoose";


// Review Schema for Products and Beaches

const ProductReviewSchema = new mongoose.Schema({
    type: {type: String, required: true},
    description: {type: String, requried: true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {type: Date, default: Date.now},
    likes: {type: Number, default: 0},
    rating: {type: Number, default: 0}
})

const ProductReview = mongoose.model("ProductReview", ProductReviewSchema);

export default ProductReview;