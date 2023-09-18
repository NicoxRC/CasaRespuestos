import { Product } from '../models/Product';
import { Request, Response } from 'express';
import type { ProductInterface } from '../types/productInterface';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
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

    const findProduct = await Product.findByPk(id);
    if (!findProduct) throw res.status(404).json({ msg: 'Product not found' });

    const products: ProductInterface[] = await Product.findAll();

    if (products.length > 0) {
      products.map((el: ProductInterface) => {
        if (el.referencia === referencia) {
          throw new Error('La referencia ya existe');
        }
      });
    }

    const fields: any = {};

    if (nombre) fields.nombre = nombre;
    if (linea) fields.linea = linea;
    if (categoria) fields.categoria = categoria;
    if (marca) fields.marca = marca.value;
    if (descripcion) fields.descripcion = descripcion;
    if (precio) fields.precio = precio;
    if (referencia) fields.referencia = referencia;
    if (cantidad) fields.cantidad = cantidad;

    if (Object.entries(fields).length === 0) throw new Error('Not enough info');

    await findProduct.update(fields);
    res.status(200).json(findProduct);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ ërror: error.message })
      : null;
  }
};
