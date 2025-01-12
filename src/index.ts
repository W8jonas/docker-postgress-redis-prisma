import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();

const prisma = new PrismaClient();

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  } finally {
    await prisma.$disconnect();
  }
}

app.get('/users', getUsers);

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;

console.log('Port: ', process.env.DATABASE_URL)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
