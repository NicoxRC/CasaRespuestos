"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
router.get('/products', controllers_1.default.getProducts);
router.get('/user', controllers_1.default.getUser);
router.post('/products', controllers_1.default.postProduct);
router.post('/user', controllers_1.default.postUser);
router.delete('/products/:id', controllers_1.default.deleteProduct);
router.patch('/products/:id', controllers_1.default.patchProduct);
exports.default = router;
