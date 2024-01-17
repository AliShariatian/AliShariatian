import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Ali Shariatian | Front-end Developer",
   description: "Ali Shariatian, a front-end developer blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${fontInter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
            <StarsCanvas />
            {children}
         </body>
      </html>
   );
}
