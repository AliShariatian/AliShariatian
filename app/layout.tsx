import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Ali Shariatian | Front-end Developer",
   description: "Ali Shariatian, a front-end developer blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
