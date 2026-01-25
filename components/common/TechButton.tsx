import React from "react";

interface TechButtonProps {
  icon: React.ReactNode;
  name: string;
}

export const TechButton = ({icon,name}: TechButtonProps) => {
  return (
    <div className="inline-flex items-center rounded-md border-black/20 bg-black/5 px-2 py-1 text-sm text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20">
      {icon}
      <span className="ml-1.5 font-semibold">{name}</span>
    </div>
  );
};
