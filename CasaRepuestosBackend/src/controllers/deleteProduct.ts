import { Product } from '../models/Product';
import { Request, Response } from 'express';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByPk(id);
    if (!deleteProduct) throw new Error('Bad Request.');
    await deleteProduct.destroy();
    res.status(202).json({ msg: 'accepted.' });
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
