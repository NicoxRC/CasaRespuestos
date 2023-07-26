import { Product } from '../models/Product';
import { Request, Response } from 'express';
import { ProductInterface } from '../types/productInterface';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: ProductInterface[] = await Product.findAll();
    res.status(200).json(products);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};
