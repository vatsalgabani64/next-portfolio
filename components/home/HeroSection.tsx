import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/constants/personal";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsFileText } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

const HeroSection = () => {
  const { name, intro, profileImage, resume, social, mailId } = PERSONAL_INFO;

  return (
    <section
      id="introduction"
      className="relative mt-10 flex items-center"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            {/* <p className="font-mono text-sm text-muted-foreground"> */}
            <p className="mt-3 text-base sm:text-md font-mono text-muted-foreground">
              {intro.line1}
            </p>

            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {name}
            </h1>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-muted-foreground">
              {intro.headline}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {/* {intro.description} */}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-1">
              <Button asChild>
                <Link href={resume} target="_blank">
                  <FiFileText className="h-5 w-5"/>
                  View Resume
                </Link>
              </Button>

              <div className="flex items-center gap-5 ml-2">
                {social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    aria-label={item.name}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <Image
              src={profileImage}
              alt={`${name} profile`}
              width={260}
              height={260}
              priority
              className="rounded-full object-cover border border-border shadow-lg"
            />
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs font-mono">scroll</span>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
