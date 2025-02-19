import { CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
  };
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl p-6">
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
        <a href={`/blog/${post.id}`}>
          <button className="mt-4 w-full bg-dracula-green text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-dracula-pink hover:shadow-md">
            Read More
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
