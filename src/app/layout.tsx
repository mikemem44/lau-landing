import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/utils/twUtils";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

export const metadata: Metadata = {
  title: "Laura Zambrano",
  description: "Laura Zambrano's personal art portfolio website",
};

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn("bg-background grid grid-cols-1 gap-y-5 w-full light overflow-x-hidden", dm_sans.className)}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
