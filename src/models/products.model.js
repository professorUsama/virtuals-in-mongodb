import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    specifications: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {virtuals: true},
  },
);


productSchema.virtual("category").get(function(){
  if(this.type === 1){
    return "smartphones"
  }
  if(this.type === 2){
    return "tablets"
  }
  if(this.type === 3){
    return "smartwatches";
  }
})

const Product = mongoose.model("product", productSchema);

export {
  Product,
  productSchema,
};