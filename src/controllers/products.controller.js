import addProductService from "../services/products.services.js";
import {Product} from "../models/products.model.js";

const addProducts = async(req, res, next) =>{
    try {

        // const products = await Product.find();
        const resultFromProductService = await addProductService(req);
        console.log(resultFromProductService);
        res.status(200).json({message: "product created successfully"});
        // console.log(products.category);
        // res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
};

export default addProducts;