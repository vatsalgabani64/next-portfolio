"use client";

import { useState } from "react";
import Link from "next/link";
import { EXPERIENCE } from "@/constants/experience";

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = EXPERIENCE[activeIndex];

  return (
    <section
      id="experience"
      className="min-h-screen py-24 max-w-6xl mx-auto px-4 lg:px-0 flex flex-col justify-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="grid lg:grid-cols-[200px_1fr] gap-10">
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
          {EXPERIENCE.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-left font-mono text-sm border-l-2 transition
                ${
                  index === activeIndex
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            {active.role}{" "}
            <span className="text-primary">
              @{" "}
              {active.url ? (
                <Link
                  href={active.url}
                  target="_blank"
                  className="hover:underline"
                >
                  {active.company}
                </Link>
              ) : (
                active.company
              )}
            </span>
          </h3>

          <p className="text-sm mt-1 mb-6 text-muted-foreground">
            {active.period}
          </p>

          <ul className="space-y-3">
            {active.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 text-muted-foreground leading-relaxed"
              >
                <span className="text-primary">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
