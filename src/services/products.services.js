import {Product, productSchema} from "../models/products.model.js";

async function addProductService (req){
    const {name, type, specifications, image} = req.body;
    const product = await Product.create({
        name,
        type,
        specifications,
        image
    });

    // await product.save();
    return product;
}

export default addProductService;