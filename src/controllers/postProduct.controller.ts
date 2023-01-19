import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const postProduct = async (req: Request, res: Response) => {
  try {
    const { linea, categoria, descripcion, precio, referencia, cantidad } =
      req.body;
    if (
      !linea ||
      !categoria ||
      !descripcion ||
      !precio ||
      !referencia ||
      !cantidad
    )
      throw new Error('Bad Request.');

    const productComplete = await Product.create({
      linea,
      categoria,
      descripcion,
      precio,
      referencia,
      cantidad,
    });
    res.status(201).json(productComplete);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
