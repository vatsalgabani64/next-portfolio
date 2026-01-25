import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeadingProps {
  heading: string;
  viewAllHref?: string; // optional
}

export default function SectionHeading({
  heading,
  viewAllHref,
}: SectionHeadingProps) {
  const ViewAllContent = (
    <div className="flex flex-row gap-1 items-center text-sm font-medium hover:opacity-80 transition">
      <span>View All</span>
      <ChevronRight className="w-4 h-4" />
    </div>
  );

  return (
    <div className="flex flex-row mb-4 items-center justify-between">
      <h2 className="text-3xl font-bold">{heading}</h2>

      {viewAllHref && <Link href={viewAllHref}>{ViewAllContent}</Link>}
    </div>
  );
}
