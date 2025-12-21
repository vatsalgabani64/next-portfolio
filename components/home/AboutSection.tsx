"use client";

import { ABOUT_INFO } from "@/constants/about";

const AboutSection = () => {
  const { description, tech } = ABOUT_INFO;

  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-4 lg:px-0"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        About 
      </h2>

      <ul className="max-w-3xl mb-12 space-y-3 text-muted-foreground leading-relaxed">
  {description.map((item, index) => (
    <li key={index} className="flex gap-2">
      <span>-</span>
      <span>{item}</span>
    </li>
  ))}
</ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {tech.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold mb-4">
              {category.title}
            </h3>

            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="
                    flex items-center gap-3
                    rounded-md border border-border
                    px-4 py-2 text-sm
                    text-muted-foreground
                    hover:text-foreground
                    transition-colors
                  "
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
