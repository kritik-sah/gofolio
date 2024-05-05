import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Icon from "../utils/Icon";

const Navbar = () => {
  return (
    <header className="bg-crimson-50/30 border-b border-outer-space-800/30 backdrop-blur-3xl">
      <div className="max-w-screen-2xl mx-auto p-4 flex items-center justify-between gap-4">
        <Link href="/">
          <span className="text-2xl font-poppins font-semibold">GoFolio</span>
        </Link>
        <nav className="flex items-center justify-end gap-4">
          <Link
            href="https://github.com/kritik-sah"
            target="_blank"
            rel="noreferrer"
            className="hover:text-crimson-800 transition-all duration-100 ease-in-out delay-75"
          >
            Product
          </Link>
          <Link
            href="https://github.com/kritik-sah"
            target="_blank"
            rel="noreferrer"
            className="hover:text-crimson-800 transition-all duration-100 ease-in-out delay-75"
          >
            Pricing
          </Link>
          <Link
            href="https://github.com/kritik-sah"
            target="_blank"
            rel="noreferrer"
            className="hover:text-crimson-800 transition-all duration-100 ease-in-out delay-75"
          >
            Blog
          </Link>
          <Link href="/app">
            <Button>Try App</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
