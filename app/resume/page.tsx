import { RESUME_CONFIG } from "@/constants/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View my resume online.",
};

export default function ResumePage() {
  // Replace '/view' with '/preview' so it can be embedded in an iframe seamlessly
  const iframeSrc = RESUME_CONFIG.driveUrl.replace("/view", "/preview");

  return (
    <div className="py-8 mb-12 flex flex-col ">
      <header className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
        <p className="max-w-2xl text-muted-foreground text-lg">
          View my professional experience in detail.
        </p>
      </header>
      <div className="h-[85vh]">

        <iframe
          src={iframeSrc}
          className="w-full h-full rounded-md border border-border shadow-md"
          title="Resume"
          allow="autoplay"
        />
      </div>
    </div>
  );
}
