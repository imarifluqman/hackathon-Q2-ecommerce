import type { Metadata } from "next";
import "./globals.css";
import { josefin } from "./components/fonts";

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
        {children}
      </body>
    </html>
  );
}
