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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My Portfolio</title>
        <meta name="title" property="og:title" content="Zaeem Tauqir - Portfolio"></meta>
        <meta name="image" property="og:image" content="../public/portfolio-preview.png"></meta>
        <meta name="description" property="og:description" content="Welcome to my portfolio website, that I built using Next.js and TypeScript. Here you can find my projects and contact information."></meta>
        <meta name="author" content="Muhammad Zaeem Tauqir" />         
      </Head>
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
