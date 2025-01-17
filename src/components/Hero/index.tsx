import React from "react";
import Link from "@docusaurus/Link";

export default function Hero() {
  return (
    <>
      <section
        className="relative bg-gradient-to-t from-lightPeach to-white"
        style={{ height: "80vh", width: "auto" }}
      >
        <img
          src="img/astronaut-moon.svg"
          alt="moon"
          className="absolute bottom-0 left-0"
        />
        <img
          src="img/moon-sun.svg"
          alt="sun"
          className="absolute right-5 top-40"
        />
        <img
          src="img/bush.png"
          alt="bush"
          className="absolute right-0 bottom-0"
        />
        <div
          className="flex flex-col justify-center items-center relative font-[ezra]"
          style={{ height: "100%" }}
        >
          <p className="font-medium py-10 text-[60px]">Masa Protocol</p>
          <p className="text-[white] text-[22px]">
            Soulbound Identity Infrastructure for Developers Building Web3
            Communities
          </p>
          <Link to="docs/introduction">
            <p className="py-8 text-xl font-bold">Get Started</p>
          </Link>
          <p className="font-bold">Build with Masa</p>
        </div>
      </section>
    </>
  );
}
