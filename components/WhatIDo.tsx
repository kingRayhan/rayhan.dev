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
      <p className="text-base font-code">{label}</p>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <div
      id="about"
      className="grid items-center my-10 lg:grid-cols-2 lg:gap-16 wrapper"
    >
      <div className="hidden lg:block">
        <Image
          className="object-cover"
          alt="Rayhan"
          width={500}
          height={650}
          src="/images/photo-1614741118887-7a4ee193a5fa.jpeg"
        />
      </div>
      <div>
        <h2 className="mb-4 text-2xl lg:text-4xl font-code">What do I help?</h2>
        <div className="prose lg:prose-lg prose-base max-w-none">
          <p>
            My name is Rayhan and I&apos;m a full stack web developer, Nodejs
            wizard. With my 8+ years of freelancing career, I learned a lot of
            modern webs developing tools and frameworks like Nestjs, Graphql,
            expressjs, Laravel, reactjs, vuejs, webpack, grunt, sass, jsx,
            handlebars etc.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4">
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
