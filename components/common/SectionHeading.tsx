import React from "react";

interface SectionHeadingProps {
  heading: string;
}

export default function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{heading}</h2>
    </div>
  );
}
