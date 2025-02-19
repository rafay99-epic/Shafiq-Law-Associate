// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import { CalendarIcon } from "lucide-react";

// interface BlogPost {
//   id: string;
//   data: {
//     title: string;
//     description: string;
//     pubDate: Date;
//     draft: boolean;
//     tags: string[];
//   };
// }

// interface BlogListProps {
//   posts: BlogPost[];
// }

// const BlogList: React.FC<BlogListProps> = ({ posts }) => {
//   const [selectedTag, setSelectedTag] = useState<string | null>(null);

//   // Extract unique tags
//   const allTags = Array.from(
//     new Set(posts.flatMap((post) => post.data.tags || []))
//   );

//   // Filter posts based on selected tag
//   const filteredPosts = selectedTag
//     ? posts.filter((post) => post.data.tags.includes(selectedTag))
//     : posts;

//   // Debugging: Check if selectedTag updates
//   useEffect(() => {
//     console.log("Selected Tag:", selectedTag);
//   }, [selectedTag]);

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-dracula-foreground  mb-8 text-center">
//         Legal Insights & Case Law
//       </h2>

//       {/* Tag Filter System */}
//       <div className="flex flex-wrap justify-center gap-3 mb-6">
//         {/* Show "All" Button */}
//         <button
//           className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
//             selectedTag === null
//               ? "bg-dracula-green text-white"
//               : "bg-dracula-current-line text-dracula-foreground hover:bg-dracula-selection"
//           }`}
//           onClick={() => setSelectedTag(null)}
//         >
//           All
//         </button>

//         {/* Render unique tags */}
//         {allTags.map((tag) => (
//           <button
//             key={tag}
//             className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
//               selectedTag === tag
//                 ? "bg-dracula-green text-white"
//                 : "bg-dracula-current-line text-dracula-foreground hover:bg-dracula-selection"
//             }`}
//             onClick={() => {
//               console.log("Tag clicked:", tag);
//               setSelectedTag(tag);
//             }}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       {/* Blog Posts */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredPosts.length > 0 ? (
//           filteredPosts.map((post) => (
//             <Card
//               key={post.id}
//               onClick={() => {
//                 if (post.data.tags.length > 0) {
//                   setSelectedTag(post.data.tags[0]);
//                 }
//               }}
//             >
//               <h3 className="text-xl font-semibold text-dracula-foreground dark:text-dracula-bg">
//                 {post.data.title}
//               </h3>
//               <p className="text-dracula-comment dark:text-dracula-current-line text-sm mt-2">
//                 {post.data.description}
//               </p>
//               <div className="flex items-center gap-2 mt-4 text-dracula-orange dark:text-dracula-comment text-sm">
//                 <CalendarIcon className="w-4 h-4" />
//                 {new Date(post.data.pubDate).toLocaleDateString()}
//               </div>

//               {/* Read More Button */}
//               <a href={`/blog/${post.id}`}>
//                 <button className="mt-4 w-full bg-dracula-green text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-dracula-pink hover:shadow-md">
//                   Read More
//                 </button>
//               </a>
//             </Card>
//           ))
//         ) : (
//           <p className="text-center text-dracula-comment dark:text-dracula-current-line">
//             No posts found for this tag.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogList;

import React, { useState, useEffect } from "react";
import Card from "./Card";
import { CalendarIcon } from "lucide-react";

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

  // Extract unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.data.tags || []))
  );

  // Filter posts based on search and selected tag
  const filteredPosts = posts.filter((post) => {
    const matchesTag = selectedTag
      ? post.data.tags.includes(selectedTag)
      : true;
    const matchesSearch =
      post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.data.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.data.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesTag && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-dracula-foreground mb-8 text-center">
        Legal Insights & Case Law
      </h2>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-dracula-foreground bg-dracula-current-line rounded-lg border border-dracula-comment focus:outline-none focus:ring-2 focus:ring-dracula-pink"
        />
      </div>

      {/* Tag Filter System */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            selectedTag === null
              ? "bg-dracula-green text-white"
              : "bg-dracula-current-line text-dracula-foreground hover:bg-dracula-selection"
          }`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              selectedTag === tag
                ? "bg-dracula-green text-white"
                : "bg-dracula-current-line text-dracula-foreground hover:bg-dracula-selection"
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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

              {/* Read More Button */}
              <a href={`/blog/${post.id}`}>
                <button className="mt-4 w-full bg-dracula-green text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-dracula-pink hover:shadow-md">
                  Read More
                </button>
              </a>
            </Card>
          ))
        ) : (
          <p className="text-center text-dracula-comment dark:text-dracula-current-line">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
