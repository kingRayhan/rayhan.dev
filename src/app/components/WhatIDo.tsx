import Image from "next/image";
import React from "react";

interface ItemProp {
  image: string;
  label: string;
}
const Item: React.FC<ItemProp> = ({ image, label }) => {
  return (
    <div className="text-center flex flex-col items-center gap-2">
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
        <h2 className="mb-4 text-2xl lg:text-4xl font-code">
          💪 What do I help? 💻
        </h2>
        <div className="prose lg:prose-lg prose-base max-w-none">
          <p>
            👋 Hey there! As a developer, I help create 🌈 vibrant, 🚀
            high-performing, and 🎉 fun web applications that make your
            competitors say, &ldquo;Why didn&apos;t we think of that?&ldquo;
            Whether you need a new website or want to revamp an existing one,
            I&apos;m your go-to guy! I&apos;m skilled in using 🔥 React, 🍃
            Node.js, 🔮 GraphQL, and 🍀 MongoDB to build scalable and
            maintainable web applications. Don&apos;t hesitate to reach out and
            let&apos;s bring some 🤩 magic to your online presence!
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
