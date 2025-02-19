import { motion } from "framer-motion";

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
  return (
    <div className="flex justify-center items-center mt-8 gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 text-sm rounded-lg ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "bg-dracula-selection text-white bg-dracula-pink hover:bg-dracula-pink"
        }`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </motion.button>

      {Array.from({ length: totalPages }, (_, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-2 text-sm rounded-lg ${
            currentPage === i + 1
              ? "bg-dracula-green text-white"
              : "bg-dracula-current-line text-dracula-foreground hover:bg-dracula-selection"
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 text-sm rounded-lg ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "bg-dracula-selection bg-dracula-pink text-white hover:bg-dracula-pink"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </motion.button>
    </div>
  );
};

export default Pagination;
