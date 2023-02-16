import { Product } from '../models/Product';
import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json(error);
  }
};
