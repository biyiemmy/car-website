import type { Metadata } from "next";
import "./globals.css";
import { NavBar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Center",
  description: "Find, Book, or Rent a Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
