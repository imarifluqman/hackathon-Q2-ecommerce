import type { Metadata } from "next";
import "./globals.css";
import { josefin } from "./components/fonts";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Hekto Ecommerce",
  description: "Ecommerce for Hekto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased`}
      >
        <TopNav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
