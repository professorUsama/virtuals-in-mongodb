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
    toJSON: {virtuals: true, transform: (doc, ret) => { delete ret.id; }} // when we use virtual in mongoose model then the mongoose add the id of the document by default. so the transform delete the id that generated using virtuals
  }
);

// if we want the field that is not stored in the mongoDB document and those field used for some calculation then we can use virtuals in the schema model

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
reviewSchema.set('toObject', {getters: true})
const Reviews = mongoose.model("review", reviewSchema);

export default Reviews;
