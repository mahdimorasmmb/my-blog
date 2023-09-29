"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  isMobile?:boolean
}

const AuthLink:FC<Props> = ({isMobile}) => {
  const status = "notauthenticated";
  return (
  <div className={cn(!isMobile && "hidden sm:block")}>
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {status === "notauthenticated" ? (
            <Link href={"/login"} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({className:' text-base  md:text-lg px-2 md:px-4  '})}
              >
                ورود
              </NavigationMenuLink>
            </Link>
          ) : (
            <Link href={"/write"} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({className:' text-base  md:text-lg px-2 md:px-4  '})}
              >
                خروج
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  );
};

export default AuthLink;
