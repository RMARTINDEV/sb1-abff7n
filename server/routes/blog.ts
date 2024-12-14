import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';
import { z } from 'zod';

const router = express.Router();
const prisma = new PrismaClient();

const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  published: z.boolean().optional()
});

router.get('/', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } }
  });
  res.json(posts);
});

router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, content, published } = postSchema.parse(req.body);
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: published || false,
        authorId: req.user.id
      }
    });
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, published } = postSchema.parse(req.body);
    
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: { title, content, published }
    });
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.post.delete({ where: { id: Number(id) } });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

export default router;