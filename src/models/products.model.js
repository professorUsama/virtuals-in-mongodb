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
  }
);

productSchema.virtual("category").get(function(){
  const type = this.type;
  if(type === 1){
    return "smartphones"
  }
  else if(type === 2){
    return "smartwatech";
  }
  return "type not found";
});

const Product = mongoose.model("product", productSchema);

export default Product;