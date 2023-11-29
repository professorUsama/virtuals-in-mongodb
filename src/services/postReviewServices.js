import Reviews from "../models/reviews.model.js";

async function postReviewService(params){
    console.log(params);
    const review = {
        ...params,
        parentReviewID: null,
    };
    await Reviews.create(review);
    return "posted...";
}

export default postReviewService;