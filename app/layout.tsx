import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalConfigProvider from "@/components/globalConfigContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React State Management",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalConfigProvider>
          {children}
        </GlobalConfigProvider>
      </body>
    </html>
  );
}
