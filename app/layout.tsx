import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Training Notes",
  description: "Training Notes for Your sefl improvement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
