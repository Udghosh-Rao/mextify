import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextify Technologies | Building the Future",
  description: "Nextify Technologies develops cutting-edge solutions in Software Engineering, Artificial Intelligence, Data Science, Quantitative Finance, and Digital Transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
