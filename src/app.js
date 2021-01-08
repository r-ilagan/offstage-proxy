import express, { json } from 'express';
import cors from 'cors';
import middleware from './middleware';
import tmdb from './api/tmdb';
const morgan = require('morgan'); // removes deprecated warning caused by esm

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());

app.use('/api/v1/tmdb', tmdb);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
