import { Router } from 'express';
import { deleteProduct } from '../controllers/deleteProduct.controller';
import { getProducts } from '../controllers/getProducts.controller';
import { patchProducts } from '../controllers/patchProduct.controller';
import { postProduct } from '../controllers/postProduct.controller';

const router = Router();

router.get('/products', getProducts);
router.post('/products', postProduct);
router.delete('/products/:id', deleteProduct);
router.patch('/products/:id', patchProducts);

export default router;
