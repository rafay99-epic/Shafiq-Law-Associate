import React from "react";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-dracula-bg dark:bg-dracula-foreground transition-all duration-300 hover:shadow-xl p-6 border border-dracula-current-line">
      {children}
    </div>
  );
};

export default Card;
