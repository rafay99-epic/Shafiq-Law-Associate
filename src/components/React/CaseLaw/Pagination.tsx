import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <nav
      className="flex justify-center items-center mt-12 gap-2"
      aria-label="Pagination"
    >
      <motion.button
        whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
        whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
        className={`inline-flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          currentPage === 1
            ? "bg-dracula-current-line text-dracula-comment cursor-not-allowed"
            : "bg-white text-dracula-foreground border border-dracula-current-line hover:border-dracula-cyan hover:text-dracula-cyan"
        }`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </motion.button>

      <div className="flex items-center gap-1 mx-2">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-2 text-dracula-comment"
            >
              ...
            </span>
          ) : (
            <motion.button
              key={page}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`min-w-[42px] h-[42px] text-sm font-semibold rounded-lg transition-all duration-200 ${
                currentPage === page
                  ? "bg-dracula-cyan text-dracula-bg shadow-md"
                  : "bg-white text-dracula-foreground border border-dracula-current-line hover:border-dracula-cyan hover:text-dracula-cyan"
              }`}
              onClick={() => setCurrentPage(page as number)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </motion.button>
          )
        )}
      </div>

      <motion.button
        whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
        whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
        className={`inline-flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          currentPage === totalPages
            ? "bg-dracula-current-line text-dracula-comment cursor-not-allowed"
            : "bg-white text-dracula-foreground border border-dracula-current-line hover:border-dracula-cyan hover:text-dracula-cyan"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        aria-label="Next page"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </nav>
  );
};

export default Pagination;
