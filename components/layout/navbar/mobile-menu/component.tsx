import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";
import NavMenu from "../nav-menu";
import AuthLink from "../auth-link";

const MenuMobile = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Button size={"icon"}>
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full">
          {/* <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
         
          </SheetHeader> */}
          <NavMenu isMobile/>
      
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
