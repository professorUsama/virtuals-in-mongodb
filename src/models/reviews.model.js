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
    toJSON: {virtuals: true}
  }
);

reviewSchema.virtual("ratingColor")
.get(function(){
  if(this.rating <=50){
    return "bg-red-500";
  }
  else if(this.rating > 50 && this.rating <= 80){
    return "bg-yellow-500";
  }
  else {
    return "bg-green-500";
  }
})

reviewSchema. virtual("avgRating", {
  ref: "Review",
  localField: "_id",
  foreignField: "productID",
  justOne: false,
  options: {sort: {rating: -1}},
});

const Reviews = mongoose.model("review", reviewSchema);

export default Reviews;
