import { Router } from "express";
import { methods as productControllers } from "./../controllers/product.controller"

const router = Router();

/* A router that is used to create the routes for the API. */
router.get("/", productControllers.getProducts); // GET http://localhost:5000/api-restfull/products/
router.get("/:sku", productControllers.getProduct); // GET http://localhost:5000/api-restfull/products/:sku
router.post("/", productControllers.addProduct); // POST http://localhost:5000/api-restfull/products/
router.put("/:sku", productControllers.updateProduct); // PUT http://localhost:5000/api-restfull/products/:sku
router.delete("/:sku", productControllers.deleteProduct);// DELETE http://localhost:5000/api-restfull/products/:sku

export default router;