'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  isMobile?:boolean
}

const listNavLink = [
  {
    lable: "خانه",
    href: "/",
  },
  {
    lable: "تماس با ما",
    href: "/contact",
  },
  {
    lable: "درباره ما",
    href: "/about",
  },
];

const NavMenu:FC<Props> = ({isMobile}) => {
  return (
   <div className={cn(isMobile ? 'flex items-center justify-center h-full flex-grow':'hidden sm:block')}>
     <NavigationMenu  className="">
      <NavigationMenuList className="flex-col sm:flex-row ">
        {listNavLink.map((item) => (
          <NavigationMenuItem className="w-full flex justify-center" key={item.lable}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink   className={navigationMenuTriggerStyle({className:cn(' text-base  xl:text-lg px-2 md:px-4 w-full ',isMobile && ' !p-10')})}>
                {item.lable}
              </NavigationMenuLink>
          
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
   </div>
  );
};

export default NavMenu;
