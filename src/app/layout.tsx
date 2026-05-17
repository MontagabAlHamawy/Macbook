import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Macbook Pro 14” - Next Three",
  description: "Experience the power of the Macbook Pro 14” with Next Three. Explore its stunning design, exceptional performance, and innovative features. Discover how Next Three enhances your Macbook Pro experience with seamless integration and cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable}`}
    >
      <body className="">
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
