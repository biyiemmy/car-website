import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="mx-auto max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt=""
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <Button title="Sign in" btnType="button" containerStyles="text-primary-blue rounded-full bg-white main-w-[130]" />
      </nav>
    </header>
  );
};

export default NavBar;
