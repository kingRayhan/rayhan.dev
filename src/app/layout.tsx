import "./globals.scss";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I am Rayhan",
  openGraph: {
    title: "I am Rayhan",
    images: [
      "https://res.cloudinary.com/kingrayhan/image/upload/f_auto,q_auto/v1663233070/my-website/og.png",
    ],
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
