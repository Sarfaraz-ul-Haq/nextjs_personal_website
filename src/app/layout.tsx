import Sidebar from "@/components/sidebar";
import { personalData } from "@/data/page";
import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarfaraz ul Haq",
  description:
    "Enrolled in Cloud Applied Generative AI Engineer (GenEng) Program at Panaverse DAO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{inter.className} flex flex-col sm:flex-row ">
        <Sidebar data={personalData} />
        <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
