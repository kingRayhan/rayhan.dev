import "./globals.scss";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I am Rayhan",
  metadataBase: new URL("https://www.rayhan.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "I am Rayhan",
    images:
      "https://res.cloudinary.com/kingrayhan/image/upload/f_auto,q_auto/v1663233070/my-website/og.png",
  },
};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
