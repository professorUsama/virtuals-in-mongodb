import addProductService from "../services/products.services.js";

const addProducts = async(req, res, next) =>{
    try {
        const resultFromProductService = addProductService();
        console.log(resultFromProductService);
        res.status(200).json({message: "This is add product api"});
    } catch (error) {
        console.log(error);
    }
};

export default addProducts;