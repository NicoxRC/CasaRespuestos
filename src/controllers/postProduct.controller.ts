import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const postProduct = async (req: Request, res: Response) => {
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
      !referencia ||
      !cantidad
    )
      throw new Error('Bad Request.');

    const products = await Product.findAll();

    if (products.length > 0) {
      products.map((el: any) => {
        if (el.referencia === referencia) {
          throw new Error('La referencia ya existe');
        }
      });
    }

    const productComplete = await Product.create({
      nombre,
      linea,
      categoria,
      marca: marca.value,
      descripcion,
      precio,
      referencia,
      cantidad,
      unidad: 'unidad',
    });

    res.status(201).json(productComplete);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
