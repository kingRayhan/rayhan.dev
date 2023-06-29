import React from "react";
import WhatIDo from "./components/WhatIDo";
import Stacks from "./components/Stacks";
import Hero from "./components/Hero";

const page = () => {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Stacks />
    </>
  );
};

export default page;
