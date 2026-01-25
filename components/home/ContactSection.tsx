"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/constants/personal";

const ContactSection = () => {
  const { mailId } = PERSONAL_INFO;

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center mt-20 mb-10 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h2>

      <h3 className="text-3xl sm:text-4xl font-bold mb-6">
        Let&apos;s Build Something Together.
      </h3>

      <div className="text-muted-foreground leading-relaxed mb-5">
        <p className="max-w-lg text-base sm:text-md">
          I&apos;m actively exploring opportunities in full-stack development and AI-integrated products.
        </p>
      </div>

      <Button asChild size="lg" variant="outline">
        <Link href={`mailto:${mailId}`}>Say Hello →</Link>
      </Button>
    </section>
  );
};

export default ContactSection;
