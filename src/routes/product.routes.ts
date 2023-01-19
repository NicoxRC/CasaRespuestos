import { Router } from 'express';
import { deleteProduct } from '../controllers/deleteProduct.controller';
import { getProducts } from '../controllers/getProducts.controller';
import { postProduct } from '../controllers/postProduct.controller';

const router = Router();

router.get('/products', getProducts);
router.post('/products', postProduct);
router.delete('/products/:id', deleteProduct);

export default router;
