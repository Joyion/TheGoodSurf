import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    locationArea: {type: String, required: true},
    city: String,
    country: String,
    contintent: String,
    exactLocation: String,
    description: String,
    officialRating: String,
    rating: Number,
    crowdRating: Number,
    surfRating: Number,
    beachReviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BeachReview"
    }
})

const Location = mongoose.model("Location", locationSchema);

export default Location;