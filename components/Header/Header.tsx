import React, { useState } from "react";
import { josefinSans } from "@/global/fonts/jose";
import classnames from "@/functions/utils/classnames";
import { Web3Button } from "@web3modal/react";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    className="box-border relative shrink-0 px-6 py-4 ml-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]"
    onClick={onClick}
  >
    {children}
  </button>
);

function Header() {
  return (
    <div className="flex flex-col justify-center px-2.5 text-center">
      <div className="w-full py-2 max-w-full  mx-auto flex justify-between items-center">
        <Link className=" flex  items-center" href='/'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a0ff2ef018a97d204179c0559aa8192723b36a4b849b5f0892c47a6d19d923?apiKey=b29e662d2233411ea11afe26bae5dee3&"
          alt="Placeholder image"
          className="shrink-0  justify-center px-4   w-[220px] "
        />
        </Link>
      <div className="w-64 flex justify-between items-center">
      <Link className="w-24 h-10 items-center justify-center flex text-white hover:text-yellow-300" href="/">
        GENERATE
      </Link>
      <Link className="w-24 h-10 items-center justify-center flex text-white hover:text-yellow-300"  href="/verify">
        VERIFY
      </Link>
      </div>
      <button className="justify-center px-8 py-2 mt- mr-10 text-lg font-light tracking-wide text-yellow-300 rounded-3xl border border-yellow-300 border-solid max-md:px-5 hover:text-white hover:bg-yellow-300 hover:border-white">
          Connect Wallet
        </button>
        <div className="absolute mt-24 left-0 w-full border-t border-gray-500"></div>
        </div>
    </div>
  );
}

export default Header;

