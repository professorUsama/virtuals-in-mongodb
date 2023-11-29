import getReviewsService from "../services/getReviews.services.js";

const getReviews = async (req, res, next) => {
  const { id } = req.query; // get product id
  const resultFromGetReviewsService = await getReviewsService(id);
  res.status(200).json(resultFromGetReviewsService);
}
export default getReviews;
