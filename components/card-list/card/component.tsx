import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex mb-12  items-center gap-12 ">
      <div className="flex-1 h-[350px] relative">
        <Image src={"/p1.jpeg"} fill alt="" objectFit="cover" className="rounded-lg"/>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex gap-2">
            <span className="text-neutral-400">11.02.2023</span>
            <span className="text-red-700 font-medium">فرهنگ</span>
        </div>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h4>
        <p className="text-lg font-light text-neutral-500">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </p>
        <Button className="w-max" variant={"ghost"}>  ادامه مطلب</Button>
      </div>
    </div>
  );
};

export default Card;
