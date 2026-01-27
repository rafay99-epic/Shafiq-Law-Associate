import { Tag } from "lucide-react";

interface TagFilterProps {
  allTags: string[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({
  allTags,
  selectedTag,
  setSelectedTag,
}) => {
  if (allTags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-1.5 text-sm text-dracula-comment mr-2">
        <Tag className="w-4 h-4" />
        Filter:
      </span>

      <button
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          selectedTag === null
            ? "bg-dracula-cyan text-dracula-bg shadow-md"
            : "bg-dracula-bg text-dracula-foreground border border-dracula-current-line hover:border-dracula-cyan hover:text-dracula-cyan"
        }`}
        onClick={() => setSelectedTag(null)}
      >
        All
      </button>

      {allTags.map((tag) => (
        <button
          key={tag}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            selectedTag === tag
              ? "bg-dracula-cyan text-dracula-bg shadow-md"
              : "bg-dracula-bg text-dracula-foreground border border-dracula-current-line hover:border-dracula-cyan hover:text-dracula-cyan"
          }`}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
