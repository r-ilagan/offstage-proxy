import express from 'express';
import tmdb from './tmdb';

const router = express.Router();

router.use('/tmdb', tmdb);

export default router;
