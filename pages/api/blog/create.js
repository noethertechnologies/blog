import prisma from '@/lib/prisma';  // Import Prisma client

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { title, slug, topic, content, author, date, images } = req.body;

  // Validate the required fields
  if (!title || !slug || !topic || !content || !author || !date) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Insert the blog data into the PostgreSQL database using Prisma
    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        topic,
        content,
        author,
        date: new Date(date),  // Ensure date is stored as a Date object
        images,  // Store the image URL
      },
    });

    // Respond with the created blog object
    res.status(201).json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
