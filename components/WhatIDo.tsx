import Image from "next/image";
import React from "react";

interface ItemProp {
  image: string;
  label: string;
}
const Item: React.FC<ItemProp> = ({ image, label }) => {
  return (
    <div className="text-center">
      <Image src={image} alt={label} height={62} width={62} />
      <p className="text-lg font-code">{label}</p>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <div className="grid items-center grid-cols-2 gap-28 wrapper">
      <div>
        <img
          className="object-cover"
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
      <div>
        <h2 className="mb-4 text-4xl font-code">What do I help?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            My name is Rayhan and I&apos;m a full stack web developer, Nodejs
            wizard. With my 8+ years of freelancing career, I learned a lot of
            modern webs developing tools and frameworks like Nestjs, Graphql,
            expressjs, Laravel, reactjs, vuejs, webpack, grunt, sass, jsx,
            handlebars etc.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10">
          <Item
            image={"/images/frontend-icon.png"}
            label={"Frontend Development"}
          />
          <Item
            image={"/images/backend-icon.png"}
            label={"Backend/API Development"}
          />
          <Item image={"/images/devops-icon.png"} label={"DevOps"} />
          <Item
            image={"/images/mobile-app-icon.png"}
            label={"Mobile App Development"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
