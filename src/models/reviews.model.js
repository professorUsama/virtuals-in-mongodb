import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    parentReviewID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "review",
      required: false,
    },
    reviewDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("review", reviewSchema);

export default Reviews;
