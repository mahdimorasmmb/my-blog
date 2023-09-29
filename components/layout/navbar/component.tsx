import React from "react";
import Soical from "./social";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import AuthLink from "./auth-link";
import NavMenu from "./nav-menu";
import MenuMobile from "./mobile-menu";

const NavBar = () => {
  return (
    <nav className="flex h-28 items-center  justify-between  ">
      <Soical />
      <Logo />
      <div className="flex gap-5 sm:gap-2">
        <ThemeToggle />
        <NavMenu />
        <AuthLink />
        <MenuMobile/>
      </div>
    </nav>
  );
};

export default NavBar;
