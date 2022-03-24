import Hero from "@/components/Hero";
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

      <main className=" max-w-4xl mx-auto px-6 md:p-0">
        <Hero />
      </main>
    </>
  );
};

export default Home;
