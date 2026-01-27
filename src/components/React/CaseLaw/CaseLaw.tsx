import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, BookOpen } from "lucide-react";
import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

interface BlogPost {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    draft: boolean;
    tags: string[];
  };
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 9;

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.data.tags || []))
  );

  const filteredPosts = posts.filter((post) => {
    const matchesTag = selectedTag
      ? post.data.tags.includes(selectedTag)
      : true;
    const matchesSearch =
      post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.data.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="min-h-screen bg-dracula-bg">
      {/* Hero Section */}
      <div className="bg-dracula-cyan py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-dracula-bg/10 rounded-full mb-6">
              <Scale className="w-8 h-8 text-dracula-bg" />
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-dracula-bg mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Legal Insights & Case Law
            </h1>
            <p className="text-lg text-dracula-bg/80 max-w-2xl mx-auto leading-relaxed">
              Expert analysis and insights on Pakistani law, landmark cases, and
              legal developments that matter to you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-dracula-current-line"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <TagFilter
              allTags={allTags}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          </div>
        </motion.div>
      </div>

      {/* Results Count */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex items-center gap-2 text-dracula-comment">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"} found
            {selectedTag && (
              <span>
                {" "}
                in <span className="font-semibold text-dracula-cyan">{selectedTag}</span>
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${selectedTag}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-dracula-current-line rounded-full mb-6">
                  <BookOpen className="w-10 h-10 text-dracula-comment" />
                </div>
                <h3
                  className="text-xl font-semibold text-dracula-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  No articles found
                </h3>
                <p className="text-dracula-comment">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default BlogList;
