import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/header/nav";

const PixelOperator = localFont({
  src: "./fonts/PixelOperator8.ttf",
  variable: "--font-pixel-operator",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alex S",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PixelOperator.className} antialiased `}>
        <div className="p-2 flex items-center justify-center">
          <Nav></Nav>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
