import Reviews from "../models/reviews.model.js";

async function getReviewsService(productID) {
  let reviews;
  if (productID) {
    reviews = await Reviews.find({ productID: productID });
    return reviews;
  }

  reviews = await Reviews.find();
  return reviews;
}

export default getReviewsService;
