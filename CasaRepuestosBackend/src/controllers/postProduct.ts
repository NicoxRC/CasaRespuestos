import { Request, Response } from 'express';
import { Product } from '../models/Product';
import type { ProductInterface } from '../types/productInterface';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      nombre,
      linea,
      categoria,
      marca,
      descripcion,
      precio,
      referencia,
      cantidad,
    } = req.body;

    if (
      !nombre ||
      !linea ||
      !categoria ||
      !marca ||
      !descripcion ||
      !precio ||
      !referencia
    )
      throw new Error('Bad Request.');

    const products: ProductInterface[] = await Product.findAll();

    if (products.length > 0) {
      products.map((el: ProductInterface) => {
        if (el.referencia === referencia) {
          throw new Error('La referencia ya existe');
        }
      });
    }

    const product = await Product.create({
      nombre,
      linea,
      categoria,
      // marca: marca.value,
      marca,
      descripcion,
      precio,
      referencia,
      cantidad: cantidad ? cantidad : 0,
      unidad: 'unidad',
    });

    res.status(201).json(product);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
