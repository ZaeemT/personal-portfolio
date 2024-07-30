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
        <meta name="description" content="Welcome to my portfolio website. Here you can find my projects and contact information." />
        <meta property="og:title" content="Zaeem Tauqir - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Here you can find my projects and contact information." />
        <meta property="og:image" content="../public/portfolio-preview.png" />
        <meta property="og:url" content="https://zaeemtauqir.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zaeem Tauqir - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Here you can find my projects and contact information." />
        <meta name="twitter:image" content="../public/portfolio-preview.png" />
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
