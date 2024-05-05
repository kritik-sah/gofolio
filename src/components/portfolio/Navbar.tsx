"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import Icon from "../utils/Icon";

const Navbar = () => {
  const params = useParams<{ username: string }>();
  return (
    <div className="flex items-center justify-between gap-3 border border-crimson-100 bg-white rounded-2xl shadow-sm p-4">
      <Link
        href={`/p/${params?.username}/`}
        className="flex flex-col items-center justify-center gap-2 rounded-2xl h-20 w-20 bg-crimson-100/40 hover:bg-crimson-600 hover:text-crimson-50"
      >
        <Icon name="FaUser" className="text-2xl" />
        <p className="text-sm">About</p>
      </Link>
      <Link
        href={`/p/${params?.username}/resume`}
        className="flex flex-col items-center justify-center gap-2 rounded-2xl h-20 w-20 bg-crimson-100/40 hover:bg-crimson-600 hover:text-crimson-50"
      >
        <Icon name="FaRegFileLines" className="text-2xl" />
        <p className="text-sm">Resume</p>
      </Link>
      <Link
        href={`/p/${params?.username}/portfolio`}
        className="flex flex-col items-center justify-center gap-2 rounded-2xl h-20 w-20 bg-crimson-100/40 hover:bg-crimson-600 hover:text-crimson-50"
      >
        <Icon name="FaLaptopFile" className="text-2xl" />
        <p className="text-sm">Works</p>
      </Link>
      <Link
        href={`/p/${params?.username}/links`}
        className="flex flex-col items-center justify-center gap-2 rounded-2xl h-20 w-20 bg-crimson-100/40 hover:bg-crimson-600 hover:text-crimson-50"
      >
        <Icon name="FaArrowUpRightFromSquare" className="text-2xl" />
        <p className="text-sm">Links</p>
      </Link>
      <Link
        href={`/p/${params?.username}/contact`}
        className="flex flex-col items-center justify-center gap-2 rounded-2xl h-20 w-20 bg-crimson-100/40 hover:bg-crimson-600 hover:text-crimson-50"
      >
        <Icon name="FaAddressBook" className="text-2xl" />
        <p className="text-sm">Contact</p>
      </Link>
    </div>
  );
};

export default Navbar;
