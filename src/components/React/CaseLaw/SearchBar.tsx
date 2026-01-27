import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="relative w-full lg:w-96">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dracula-comment w-5 h-5" />
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-10 py-3.5 text-dracula-foreground bg-dracula-bg rounded-xl border-2 border-dracula-current-line focus:border-dracula-cyan focus:outline-none transition-colors placeholder:text-dracula-comment/60"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-dracula-comment hover:text-dracula-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
