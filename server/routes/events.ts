import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';
import { z } from 'zod';

const router = express.Router();
const prisma = new PrismaClient();

const eventSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().transform(str => new Date(str)),
  location: z.string().min(1),
  capacity: z.number().positive()
});

router.get('/', async (req, res) => {
  const events = await prisma.event.findMany({
    include: { registrations: true }
  });
  res.json(events);
});

router.post('/', authenticateToken, async (req, res) => {
  try {
    const eventData = eventSchema.parse(req.body);
    const event = await prisma.event.create({ data: eventData });
    res.json(event);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

router.post('/:id/register', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const event = await prisma.event.findUnique({
      where: { id: Number(id) },
      include: { registrations: true }
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.registrations.length >= event.capacity) {
      return res.status(400).json({ message: 'Event is full' });
    }

    const registration = await prisma.registration.create({
      data: {
        eventId: Number(id),
        name,
        email
      }
    });

    res.json(registration);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

export default router;