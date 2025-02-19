import React from "react";
import Card from "./Card";
import { CalendarIcon } from "lucide-react";

interface BlogPost {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
  };
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-dracula-foreground dark:text-dracula-bg mb-8 text-center">
        Legal Insights & Articles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <h3 className="text-xl font-semibold text-dracula-foreground dark:text-dracula-bg">
              {post.data.title}
            </h3>
            <p className="text-dracula-comment dark:text-dracula-current-line text-sm mt-2">
              {post.data.description}
            </p>
            <div className="flex items-center gap-2 mt-4 text-dracula-orange dark:text-dracula-comment text-sm">
              <CalendarIcon className="w-4 h-4" />
              {new Date(post.data.pubDate).toLocaleDateString()}
            </div>

            {/* Updated Button */}
            <a href={`/blog/${post.id}`}>
              <button className="mt-4 w-full bg-dracula-green text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-dracula-pink hover:shadow-md">
                Read More
              </button>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
