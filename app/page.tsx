"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  slug: string;
  topic: string;
  author: string;
  images: string[];
  date: string;
}

const UserDashboard = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch blog posts by the user
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("/api/blog/fetch"); // Adjust API route as necessary
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Error fetching blog posts.");
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Center content with mx-auto */}
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Blog Posts
      </h1>
      {/* Error Message */}
      {error && (
        <p className="text-red-500 mb-4 text-center text-bold">{error}</p>
      )}
      {/* Blog Posts Section */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start"
          >
            {/* Responsive and centered content */}
            <div className="relative w-full h-48 sm:w-40 sm:h-40 flex-shrink-0 mb-4 sm:mb-0">
              {/* Adjust image size for mobile */}
              <Image
                src={post.images[0]} // Display the first image as the preview
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between text-center sm:text-left">
              {/* Center text on mobile, left-align on larger screens */}
              <div>
                <h2 className="text-xl font-bold mb-2 text-black">
                  {post.title}
                </h2>
                <p className="text-black font-bold mb-2">Topic: {post.topic}</p>
                <p className="text-black font-bold text-sm">
                  By {post.author}
                </p>
              </div>
              <Link href={`/blog/${post.slug}`} passHref>
                <button className="mt-4 sm:mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
