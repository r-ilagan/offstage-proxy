import express from 'express';
import axios from 'axios';

const router = express.Router();

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
});

axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
};

const baseURL = 'https://api.themoviedb.org/3';

router.get('/search', async (req, res, next) => {
  const { mode, query, page } = req.query;
  try {
    const params = new URLSearchParams({
      api_key: process.env.TMDB_API_KEY,
      query,
      page,
    });

    // 1. make the request
    const { data } = await axios.get(
      `${baseURL}/search/${mode}?${params}`,
    );

    // 2. return the data
    return res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
