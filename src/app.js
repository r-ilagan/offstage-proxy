import express, { json } from 'express';
import cors from 'cors';
import middleware from './middleware';
import api from './api';
import dotenv from 'dotenv';
const morgan = require('morgan'); // removes deprecated warning caused by esm

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());

app.get('/', (req, res) => {
  res.json({
    message: '👋 Hello there!',
  });
});

app.use('/api/v1', api);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
