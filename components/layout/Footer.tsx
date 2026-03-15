import Link from "next/link";
import { PERSONAL_INFO } from "@/constants/personal";

export default function Footer() {
  return (
    <footer className="border-t border-white/10  mt-10 ">
      <div className="mx-auto max-w-5xl px-4 lg:px-0 py-10 flex flex-col  items-center justify-between gap-4 text-sm text-muted-foreground">

      <div>
        CONNECT
      </div>
        <div className="flex items-center gap-6">
          {PERSONAL_INFO.social.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              aria-label={item.name}
              className="hover:text-foreground transition-colors"
            >
              <item.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
