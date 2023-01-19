import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from './routes/product.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(
  express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 })
);
app.use(productRoutes);

export default app;
