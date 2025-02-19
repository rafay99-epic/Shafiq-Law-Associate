import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="relative w-full md:w-1/2">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dracula-comment" />
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 text-dracula-foreground bg-dracula-current-line rounded-lg border border-dracula-comment focus:outline-none focus:ring-2 focus:ring-dracula-pink"
      />
    </div>
  );
};

export default SearchBar;
