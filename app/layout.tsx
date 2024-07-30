import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaeem Tauqir",
  description: "Personal portfolio website",
  openGraph: {
    title: "Zaeem Tauqir",
    description: "Welcome to my portfolio website. Here you can find my projects, blog posts, and contact information.",
    url: "https://zaeemtauqir.vercel.app/",
    type: "website",
    images: [
      {
        url: "/portfolio-preview-2.png", // Ensure this URL is correct
        width: 630,
        height: 630,
        alt: "Preview Image",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
