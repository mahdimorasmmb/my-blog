"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border dark:border-neutral-800 dark:bg-white bg-neutral-900">
        <TabsTrigger value="light" onClick={(e) => setTheme('light')}>
          <SunIcon className=" w-4 h-4 xl:h-[1.2rem] xl:w-[1.2rem] dark:text-black " />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={(e) => setTheme('dark')}>
          <MoonIcon className=" w-4 h-4 xl:h-[1.2rem] xl:w-[1.2rem] rotate-90 transition-all dark:rotate-0 text-white" />
        </TabsTrigger>
        {/* <TabsTrigger value="system" onClick={(e) => setTheme('system')}>
          <DesktopIcon className="h-[1.0rem] w-[1.0rem]" />
        </TabsTrigger> */}
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
