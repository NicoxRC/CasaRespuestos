import { Request, Response } from "express";
import { Product } from "../models/Product";

export const postProduct = async (req: Request, res: Response) => {
  try {
    const {
      linea,
      categoria,
      marca,
      descripcion,
      precio,
      referencia,
      cantidad,
    } = req.body;

    if (
      !linea ||
      !categoria ||
      !marca ||
      !descripcion ||
      !precio ||
      !referencia
    )
      throw new Error("Bad Request.");

    const products = await Product.findAll();

    if (products.length > 0) {
      products.map((el: any) => {
        if (el.referencia === referencia) {
          throw new Error("La referencia ya existe");
        }
      });
    }

    const productComplete = await Product.create({
      linea,
      categoria,
      marca,
      descripcion,
      precio,
      referencia,
      unidad: "unidad",
    });

    console.log("asdf");

    res.status(201).json(productComplete);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
