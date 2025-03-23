import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const topic = req.query.topic; // Get the topic from query parameters

      const blogs = await prisma.blog.findMany({
        where: {
          topic: topic,
        },
        orderBy: {
          date: 'desc', // Order by creation date in descending order
        },
      });

      return res.status(200).json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}