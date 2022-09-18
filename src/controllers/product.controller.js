import { methods as productServices } from "../services/product.service"


const getProducts = async (res) =>{
    try{
        const query = await productServices.readProducts();
        res.json(query);
    }catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const getProduct = async (req, res) =>{
    try{
        const query = await productServices.readProduct(req.params);
        res.json(query)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const addProduct = async (req, res) =>{
    try{
        const query = await productServices.createProduct(req.body);
        res.json(query)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const updateProduct = async (req, res) =>{
    try{
        const query = await productServices.updateProduct(req.body);
        res.json(query)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const deleteProduct = async (req, res) =>{
    try{
        const query = await productServices.deleteProduct(req.body);
        res.json(query)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}