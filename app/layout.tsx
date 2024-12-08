import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { motion } from 'framer-motion'
import { MainNav } from "@/components/navigation/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polarcow Studios",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <MainNav></MainNav>
        
        {children}



      </body>
    </html>
  );
}
