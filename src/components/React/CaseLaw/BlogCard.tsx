import { CalendarIcon, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    tags?: string[];
  };
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  const formattedDate = new Date(post.data.pubDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <a href={`/blog/${post.id}`} className="block h-full">
        <div className="h-full bg-white rounded-2xl overflow-hidden border border-dracula-current-line shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Decorative top accent */}
          <div className="h-1 bg-gradient-to-r from-dracula-cyan via-dracula-green to-dracula-pink" />

          <div className="p-6 sm:p-8 flex flex-col h-full">
            {/* Tags */}
            {post.data.tags && post.data.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.data.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-dracula-cyan bg-dracula-cyan/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3
              className="text-xl font-bold text-dracula-foreground mb-3 line-clamp-2 group-hover:text-dracula-cyan transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {post.data.title}
            </h3>

            {/* Description */}
            <p className="text-dracula-comment text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
              {post.data.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-dracula-current-line">
              <div className="flex items-center gap-4 text-xs text-dracula-comment">
                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>5 min</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-sm font-semibold text-dracula-green group-hover:text-dracula-pink transition-colors">
                Read
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default BlogCard;
