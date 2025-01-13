// components/ui/loader.tsx
import React from "react";

export const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};
