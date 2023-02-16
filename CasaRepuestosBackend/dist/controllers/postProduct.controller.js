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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProduct = void 0;
const Product_1 = require("../models/Product");
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, linea, categoria, marca, descripcion, precio, referencia, cantidad, } = req.body;
        if (!nombre ||
            !linea ||
            !categoria ||
            !marca ||
            !descripcion ||
            !precio ||
            !referencia)
            throw new Error('Bad Request.');
        const products = yield Product_1.Product.findAll();
        if (products.length > 0) {
            products.map((el) => {
                if (el.referencia === referencia) {
                    throw new Error('La referencia ya existe');
                }
            });
        }
        //creating a product
        const productComplete = yield Product_1.Product.create({
            nombre,
            linea,
            categoria,
            marca: marca.value,
            descripcion,
            precio,
            referencia,
            cantidad: cantidad ? cantidad : 0,
            unidad: 'unidad',
        });
        res.status(201).json(productComplete);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postProduct = postProduct;
