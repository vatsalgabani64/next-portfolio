"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/constants/personal";

const ContactSection = () => {
  const { mailId } = PERSONAL_INFO;

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-24 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Contact
      </h2>

      <h3 className="text-4xl sm:text-5xl font-bold mb-6">
        Let&apos;s Build Something Together.
      </h3>

      <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
        I&apos;m actively exploring opportunities in full-stack development,
        frontend engineering, and AI-integrated products.
        <br />
        <br />
        Whether you have a question, a project idea, or just want to connect,
        my inbox is always open.
      </p>

      <Button asChild size="lg" variant="outline">
        <Link href={`mailto:${mailId}`}>
          Say Hello →
        </Link>
      </Button>
    </section>
  );
};

export default ContactSection;
