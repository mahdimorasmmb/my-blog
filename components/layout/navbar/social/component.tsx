"use client";

import FacebookLogoIcon from "@/components/icon/FacebookLogoIcon";
import TiktokLogoIcon from "@/components/icon/TiktokLogoIcon";
import YoutubeLogoIcon from "@/components/icon/YoutubeLogoIcon";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const listIcon = [
  {
    path: "https://www.facebook.com",
    icon: FacebookLogoIcon,
  },
  {
    path: "https://www.instagram.com",
    icon: InstagramLogoIcon,
  },
  {
    path: "https://www.tiktok.com",
    icon: TiktokLogoIcon,
  },
  {
    path: "https://www.youtube.com",
    icon: YoutubeLogoIcon,
  },
];

const Soical = () => {
  return (
    <nav className="flex-1 hidden xl:block">
      {" "}
      <NavigationMenu>
        <NavigationMenuList>
          {listIcon.map((item) => (
            <NavigationMenuItem key={item.path}>
              <Link href={item.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className: "px-2 md:px-4",
                  })}
                >
                  <item.icon className="w-5 h-5" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
     
    </nav>
  );
};

export default Soical;
