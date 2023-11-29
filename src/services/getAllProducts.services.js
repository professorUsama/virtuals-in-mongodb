import { Product } from "../models/products.model.js";

async function getProductService(){
    const products = await Product.find();
    return products;
}

export default getProductService;