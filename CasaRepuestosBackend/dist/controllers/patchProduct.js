"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Product_1 = require("../models/Product");
module.exports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, linea, categoria, marca, descripcion, precio, referencia, cantidad, } = req.body;
        const findProduct = yield Product_1.Product.findByPk(id);
        if (!findProduct)
            throw res.status(404).json({ msg: 'Product not found' });
        const products = yield Product_1.Product.findAll();
        if (products.length > 0) {
            products.map((el) => {
                if (el.referencia === referencia) {
                    throw new Error('La referencia ya existe');
                }
            });
        }
        const fields = {};
        if (nombre)
            fields.nombre = nombre;
        if (linea)
            fields.linea = linea;
        if (categoria)
            fields.categoria = categoria;
        if (marca)
            fields.marca = marca.value;
        if (descripcion)
            fields.descripcion = descripcion;
        if (precio)
            fields.precio = precio;
        if (referencia)
            fields.referencia = referencia;
        if (cantidad)
            fields.cantidad = cantidad;
        if (Object.entries(fields).length === 0)
            throw new Error('Not enough info');
        yield findProduct.update(fields);
        res.status(200).json(findProduct);
    }
    catch (error) {
        error instanceof Error
            ? res.status(400).json({ ërror: error.message })
            : null;
    }
});
