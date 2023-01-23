import { Product } from './../models/Product';
import { Request, Response } from 'express';

export const patchProducts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descripcion, precio, referencia, cantidad } = req.body;
    const findProduct = await Product.findByPk(id);
    if (!findProduct) return res.status(404).json({ msg: 'Form not found' });

    const products = await Product.findAll();

    if (products.length > 0) {
      products.map((el: any) => {
        if (el.referencia === referencia) {
          throw new Error('La referencia ya existe');
        }
      });
    }

    const fields: any = {};
    if (descripcion) fields.descripcion = descripcion;
    if (precio) fields.precio = precio;
    if (referencia) fields.referencia = referencia;
    if (cantidad) fields.cantidad = cantidad;

    if (Object.entries(fields).length === 0) throw new Error('Not enough info');

    await findProduct.update(fields);
    res.status(200).json(findProduct);
  } catch (error: any) {
    res.status(400).json(error);
  }
};
