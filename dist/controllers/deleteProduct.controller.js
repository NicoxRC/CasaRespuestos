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
exports.deleteProduct = void 0;
const Product_1 = require("../models/Product");
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteProduct = yield Product_1.Product.findByPk(id);
        if (!deleteProduct)
            throw new Error('Bad Request.');
        yield deleteProduct.destroy();
        res.status(202).json({ msg: 'accepted.' });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.deleteProduct = deleteProduct;
