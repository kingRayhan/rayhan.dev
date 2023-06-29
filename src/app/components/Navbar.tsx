import Link from "next/link";
import React from "react";
import ClassNames from "classnames";

const Navbar = () => {
  return (
    <div className={ClassNames("lg:absolute top-0 z-50 w-full py-10")}>
      <div className="flex justify-between wrapper">
        <div>
          <Link className="text-2xl font-semibold font-code" href={"/"}>
            Rayhan
          </Link>
        </div>
        <div className="items-center justify-between hidden lg:flex gap-11">
          <Link href={"#home"} className="font-code">
            Home
          </Link>
          <Link className="font-code" href="#about">
            About
          </Link>
          <Link className="font-code" href="#stack">
            Stacks
          </Link>
          <Link className="font-code" href="#contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
