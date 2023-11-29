import postReviewService from "../services/postReviewServices.js";


const postReview = async (req, res, next) =>{
    const { type} = req.query;
    if(type === "review"){
        console.log("post review on the product");
        const {parentReviewID, ...rest} = req.body;
        const resultFromPostService = await postReviewService(rest);
        return res.status(200).json(`Review ${resultFromPostService}`);
    }
};

export default postReview;