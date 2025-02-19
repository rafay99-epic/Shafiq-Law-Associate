import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  tags: string[];
}

const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="bg-dracula-bg text-dracula-foreground py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-dracula-foreground mb-6">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg p-6 border border-dracula-current-line hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-dracula-foreground mb-2">
                {post.title}
              </h3>
              <p className="text-dracula-comment mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-dracula-orange">
                <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                <a
                  href={`/blog/${post.id}`}
                  className="text-dracula-green hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
