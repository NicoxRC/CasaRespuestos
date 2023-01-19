import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByPk(id);
    if (!deleteProduct) throw new Error('Bad Request.');
    await deleteProduct.destroy();
    res.status(202).json({ msg: 'accepted.' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
