import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  tags: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  // Only show latest 3 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 -mx-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-dracula-cyan uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-dracula-cyan" />
              Legal Insights
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dracula-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Latest <span className="text-dracula-cyan">Case Law</span> &
              Articles
            </h2>
          </div>

          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-dracula-cyan font-semibold hover:text-dracula-green transition-colors group flex-shrink-0"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Blog grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {latestPosts.map((post, index) => {
            const gradients = [
              "from-dracula-cyan to-dracula-orange",
              "from-dracula-green to-dracula-cyan",
              "from-dracula-pink to-dracula-green",
            ];

            return (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="group"
              >
                <a href={`/blog/${post.id}`} className="block h-full">
                  <div className="h-full bg-white rounded-2xl overflow-hidden border border-dracula-current-line shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Top gradient accent */}
                    <div
                      className={`h-1.5 bg-gradient-to-r ${gradients[index % gradients.length]}`}
                    />

                    <div className="p-6 sm:p-8 flex flex-col h-full">
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
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
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-dracula-comment text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {post.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-dracula-current-line">
                        <div className="flex items-center gap-2 text-xs text-dracula-comment">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {new Date(post.pubDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
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
          })}
        </motion.div>

        {/* Empty state */}
        {latestPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-dracula-current-line rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-dracula-comment" />
            </div>
            <h3
              className="text-xl font-semibold text-dracula-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              No articles yet
            </h3>
            <p className="text-dracula-comment">
              Check back soon for legal insights and case law updates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
