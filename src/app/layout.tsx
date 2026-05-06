import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
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
    <html lang="es">
      <body className={dm_sans.className}>
        <Header></Header>
        <Main>
          {children}
        </Main>
        <Footer></Footer>
      </body>
    </html>
  );
}

export default RootLayout;
