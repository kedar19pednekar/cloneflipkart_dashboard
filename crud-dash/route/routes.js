import express from 'express';
import { getProducts, addProducts, getProductsById, editProducts, deleteProducts } from '../controller/products-controller.js';

const route = express.Router();

route.get('/', getProducts);
route.post('/add', addProducts);
route.get('/:id', getProductsById);
route.put('/:id', editProducts);
route.delete('/:id', deleteProducts);

export default route;