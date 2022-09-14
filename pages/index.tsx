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
