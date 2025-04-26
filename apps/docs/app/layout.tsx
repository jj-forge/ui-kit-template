import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Kit Template",
  description: "UI Kit Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
