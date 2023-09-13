"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const index_js_1 = __importDefault(require("../config/index.js"));
exports.sequelize = new sequelize_1.Sequelize({
    database: index_js_1.default.DB_NAME,
    dialect: 'postgres',
    host: index_js_1.default.DB_HOST,
    port: Number(index_js_1.default.DB_PORT),
    username: index_js_1.default.DB_USER,
    password: index_js_1.default.DB_PASSWORD,
    pool: {
        max: 3,
        min: 1,
        idle: 10000,
    },
    dialectOptions: {
        ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
        },
        keepAlive: true,
    },
    ssl: true,
});
// export let sequelize: any =
//   process.env.NODE_ENV === 'production'
//     ? new Sequelize({
//         database: store.DB_NAME,
//         dialect: 'postgres',
//         host: store.DB_HOST,
//         port: Number(store.DB_PORT),
//         username: store.DB_USER,
//         password: store.DB_PASSWORD,
//         pool: {
//           max: 3,
//           min: 1,
//           idle: 10000,
//         },
//         dialectOptions: {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false,
//           },
//           keepAlive: true,
//         },
//         ssl: true,
//       })
//     : new Sequelize(
//         `postgres://${store.DB_USER}:${store.DB_PASSWORD}@${store.DB_HOST}/${store.DB_NAME}`,
//         { logging: false, native: false }
//       );
