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
  return (
    <div className="flex flex-wrap gap-2 justify-center">
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
  );
};

export default TagFilter;
