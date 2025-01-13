import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';
import { startServer } from './server';

const app: Application = express();

app.use(express.json());
app.use('/users', userRoutes);
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
startServer(app)
export default app;
