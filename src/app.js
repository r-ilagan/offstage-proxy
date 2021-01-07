import express, { json } from 'express';
import cors from 'cors';
import middleware from './middleware';
const morgan = require('morgan'); // removes deprecated warning caused by esm

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());

app.get('/', (req, res) => {
  res.json({
    message: '👋 Hello there!',
  });
});

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
