"use client";

import { aboutConfig } from "@/constants/about";
import { TechButton } from "../common/TechButton";
import SectionHeading from "../common/SectionHeading";

const AboutSection = () => {
  const { description, tech } = aboutConfig;

  return (
    <section id="about" className="mt-30">
      <SectionHeading heading="About" />

      <div className="text-md  text-muted-foreground">
        {description.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i} className="text-foreground font-semibold">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </div>

      <div>

      </div>
    </section>
  );
};

export default AboutSection;
