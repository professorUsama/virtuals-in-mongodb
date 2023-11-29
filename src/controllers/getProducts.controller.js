import getProductService from "../services/getAllProducts.services.js";

const getProducts = async(req, res, next) =>{
    const resultFromGetProductService = await getProductService();
    res.status(200).json(resultFromGetProductService);
};

export default getProducts;