import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { marked } from 'marked';
import BlogLayout from './BlogLayout'; // Import your layout component

interface BlogPost {
  title: string;
  topic: string;
  content: string;
  author: string;
  images: string[];
  date: string;
}

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchBlogPost = async () => {
        try {
          const response = await axios.get(`/api/blog/${slug}`);
          setPost(response.data);
        } catch (error) {
          console.error('Error fetching blog post:', error);
          setError('Error fetching blog post.');
        }
      };

      fetchBlogPost();
    }
  }, [slug]);

  if (error) {
    return <BlogLayout><div className="p-4 text-red-500">{error}</div></BlogLayout>;
  }

  if (!post) {
    return <BlogLayout><div className="p-4">Loading...</div></BlogLayout>;
  }

  return (
    <BlogLayout>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-2">By {post.author} • {new Date(post.date).toLocaleDateString()}</p>

        {/* Main Image */}
        {post.images.length > 0 && (
          <div className="relative w-full mb-6" style={{ height: '400px' }}>
            <Image
              src={post.images[0]} // Show main image
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

        {/* Blog Topic */}
        <p className="text-lg font-semibold mb-4 text-blue-600">Topic: {post.topic}</p>

        {/* Additional Images (optional) */}
        {post.images.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {post.images.slice(1).map((imageUrl, index) => (
              <div key={index} className="relative w-full h-64">
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1} of ${post.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPostPage;
