import mongoose from "mongoose";

// Products with reviews 
const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brandName: String,
    type: String,
    averagePrice: String,
    rating: Number,
    description: String,
    officialReview: String,
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }
})

const Product = mongoose.model("Product", ProductSchema);

export default Product;