import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { SITE_INFO } from "@/constants/site";

export const metadata: Metadata = {
  title: {
    default: SITE_INFO.title,
    template: `%s · ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
    openGraph: {
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    type: "website",
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 mx-auto w-full max-w-5xl px-4 lg:px-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
