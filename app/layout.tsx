import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abue Ammar",
  description: "The website and portfolio of Abue Ammar.",
};

export const viewport: Viewport = {
  themeColor: "#fff",
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-auto max-w-[80ch] px-8 py-20 font-normal text-black antialiased">
        {children}
      </body>
    </html>
  );
}
