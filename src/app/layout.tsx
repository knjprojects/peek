import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/daisyui/ThemeSwitch";
import HomeLink from "@/components/HomeLink";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peek",
  description: "A social Media app powered by appwrite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <HomeLink />
          <ThemeSwitch />
        </div>

        {children}
      </body>
    </html>
  );
}
