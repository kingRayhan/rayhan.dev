import Link from "next/link";
import React, { useEffect, useState } from "react";
import ClassNames from "classnames";

const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScrollHeight(window.scrollY);
  //   });
  // }, []);
  //className={ClassNames("fixed top-0 z-50 w-full py-10", {
  //   "bg-white shadow-sm": scrollHeight > 220,
  // })}
  return (
    <div className={ClassNames("lg:absolute top-0 z-50 w-full py-10")}>
      <div className="flex justify-between wrapper">
        <div>
          <Link href={"/"}>
            <a className="text-2xl font-semibold font-code">Rayhan</a>
          </Link>
        </div>
        <div className="items-center justify-between hidden lg:flex gap-11">
          <a className="font-code" href="#home">
            Home
          </a>
          <a className="font-code" href="#about">
            About
          </a>
          <a className="font-code" href="#stack">
            Stacks
          </a>
          <a className="font-code" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
