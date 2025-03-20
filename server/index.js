import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db.js';

dotenv.config(); // Loads .env variables

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
