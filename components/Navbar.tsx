import Link from "next/link";
import React, { useEffect, useState } from "react";
import ClassNames from "classnames";

const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
  }, []);

  return (
    <div
      className={ClassNames("fixed top-0 z-50 w-full py-10", {
        "bg-white shadow-sm": scrollHeight > 220,
      })}
    >
      <div className="flex justify-between wrapper">
        <div>
          <Link href={"/"}>
            <a className="text-2xl font-semibold font-code">Rayhan</a>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-11">
          <a className="font-code" href="#">
            Home
          </a>
          <a className="font-code" href="#">
            About
          </a>
          <a className="font-code" href="#">
            Contact
          </a>
          <a className="font-code" href="#">
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
