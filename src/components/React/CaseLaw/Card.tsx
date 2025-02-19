import React from "react";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void; // Added onClick support
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl p-6"
      onClick={onClick} // Attach onClick handler
    >
      {children}
    </div>
  );
};

export default Card;
