import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

router.get('/products', controllers.getProducts);
router.get('/user', controllers.getUser);
router.post('/products', controllers.postProduct);
router.post('/user', controllers.postUser);
router.delete('/products/:id', controllers.deleteProduct);
router.patch('/products/:id', controllers.patchProduct);

export default router;
