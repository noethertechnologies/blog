import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      const blog = await prisma.blog.findUnique({
        where: { slug },
        include: {
          comments: {
            include: {
              user: {
                select: { name: true },
              },
            },
            orderBy: { createdAt: 'desc' },
          },
        },
      });

      if (!blog) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      return res.status(200).json(blog);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { content, userId } = req.body;

      if (!userId || !content) {
        return res.status(400).json({ error: 'Invalid input' });
      }

      const blog = await prisma.blog.findUnique({ where: { slug } });
      if (!blog) return res.status(404).json({ error: 'Blog post not found' });

      const newComment = await prisma.comment.create({
        data: {
          content,
          blogId: blog.id,
          userId,
        },
      });

      return res.status(201).json(newComment);
    } catch (error) {
      console.error('Error adding comment:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
