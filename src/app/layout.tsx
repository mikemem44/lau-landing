import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { cn } from "@/utils/twUtils";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Laura Zambrano",
  description: "Laura Zambrano's personal art portfolio website",
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn("bg-background grid grid-cols-1 gap-y-5 w-full dark overflow-x-hidden", `${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`)}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
