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
      <body className={`${PixelOperator.className} antialiased flex justify-center`}>
        <div className="p-2 container flex-col max-w-[60rem]">
          <Nav></Nav>
          <div className=" border-2 border-alexSemiDark p-1 ">
            <div className="border-2 border-alexSemiDark p-4">
              {children}
            </div></div>
        </div>
      </body>
    </html>
  );
}
