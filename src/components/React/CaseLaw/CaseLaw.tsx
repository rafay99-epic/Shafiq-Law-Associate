import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Legal Insights & Case Law
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TagFilter
          allTags={allTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <p>No posts found.</p>
          )}
        </motion.div>
      </AnimatePresence>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BlogList;
