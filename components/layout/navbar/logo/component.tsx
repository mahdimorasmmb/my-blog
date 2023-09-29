import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="sm:flex-1 flex justify-start  xl:justify-center ">
      <Link href={"/"}>
        <h1 className="  2xl:text-3xl  text-2xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          بلاگ من
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
