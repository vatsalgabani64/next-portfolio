import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { SITE_INFO } from "@/constants/siteInfo";

export const metadata: Metadata = {
  title: SITE_INFO.name,
  description: "Full-stack developer building modern web applications.",
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
