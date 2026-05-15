import 'dotenv/config';
 
import express from 'express';
import routes from '../routes/index.js';
import ErrorHandler from '../middlewares/error.js';
const cors = require('cors');
const app = express();
 
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);
app.use(cors());
 
export default app;