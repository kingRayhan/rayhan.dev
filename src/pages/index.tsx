import ConditionallyRender from "@/components/ConditionallyRender";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stacks from "@/components/Stacks";
import WhatIDo from "@/components/WhatIDo";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>I am Rayhan</title>
        <meta
          name="description"
          content="I am here for you to build an awesome application"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* OG */}
        <meta property="og:title" content="I am Rayhan" />
        <meta
          property="og:description"
          content="I am here for you to build an awesome application"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kingrayhan/image/upload/f_auto,q_auto/v1663233070/my-website/og.png"
        />
        <meta property="og:url" content="https://kingrayhan.vercel.app/" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rayhan095" />
        <meta name="twitter:creator" content="@rayhan095" />
        <meta name="twitter:title" content="I am Rayhan" />
        <meta
          name="twitter:description"
          content="I am here for you to build an awesome application"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/kingrayhan/image/upload/f_auto,q_auto/v1663233070/my-website/og.png"
        />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Stacks />
      </main>
      <div className="bg-slate-800">
        <Footer />
      </div>
    </>
  );
};

export default Home;
