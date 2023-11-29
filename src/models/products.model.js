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
    toJSON: {virtuals: true, transform: (doc, ret) => { delete ret.id; }}, // when we use virtual in mongoose model then the mongoose add the id of the document by default. so the transform delete the id that generated using virtuals
    // here ret is javascript object and stands for return. it means the document return after transform
  },
);

// if we want the field that is not stored in the mongoDB document and those field used for some calculation then we can use virtuals in the schema model


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


// productSchema. virtual("avgRating", {
//   ref: "review",
//   localField: "_id",
//   foreignField: "productID",
//   justOne: false,
//   options: {sort: {rating: -1}},
// }); // this is for when we want to populate/ join two collections using ref. it will return array
productSchema.set('toObject', {getters: true}) // when we set toJSON then we can see the virtuals fields in the json response.
// when we print the document in the  console. the the virtual field not show. so if we want the virtual fields show in the console then we add this line 'toObject'
const Product = mongoose.model("product", productSchema);

export {
  Product,
  productSchema,
};