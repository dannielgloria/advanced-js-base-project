import {getConnection} from "./../common/connection"

async function createProduct(body){
    if (body.sku === undefined || body.name_product === undefined || body.price === undefined || body.price === description_product || body.url_image === undefined ){
        return res.status(400).json({message:"Bad Request. Please fill all field."})
    }
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `products`(`sku`, `name_product`, `price`, `description_product`, `url_image`) VALUES (?,?,?,?,?)", [body.sku, body.name_product, body.price, body.description_product, body.url_image]);
    console.log(result)
    return result
}

/**
 * Get a connection to the database, then get all the products from the database, then return the result
 * as JSON.
 * @returns The result of the query.
 */
async function readProducts() {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products");
    return result;
}

/**
 * It returns the product with the given SKU
 * @param body - The body of the request.
 * @returns The result of the query.
 */
async function readProduct(body) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products WHERE sku = ?", body.sku);
    return result;
}

async function updateProduct(body) {
    if (body.name_product === undefined || body.price === undefined ){
        return res.status(400).json({message:"Bad Request. Please fill all field."})
    }
    const connection = await getConnection();
    const result = await connection.query("UPDATE products SET `name_product`= ?,`price`=?,`description_product`=?,`url_image`=? WHERE sku= ?", [body.name_product, body.price, body.description_product, body.url_image,sku]);
    return result
}

async function deleteProduct(body){
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM products WHERE sku= ?", body.sku);
    return result
}

export const methods = {
    createProduct,
    readProduct,
    readProducts,
    updateProduct,
    deleteProduct
}
