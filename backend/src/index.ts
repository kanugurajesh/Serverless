import app from './app';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Invoice API');
});

export default app;
