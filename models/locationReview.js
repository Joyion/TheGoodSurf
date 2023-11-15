import mongoose from "mongoose";

const locationReviewSchema = new mongoose.Schema({
    name: {type: String, required: true},
    locationArea: {type: String, required: true},
    exactLocation: String,
    description: String,
    officialRating: String,
    rating: String,
    crowdRating: String,
    surfRating: String,
    beachReviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BeachReview"
    }
})

const LocationReview = mongoose.model("LocationReview", locationReviewSchema)