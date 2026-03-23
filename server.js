import express from 'express';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000, http://localhost:3000'));