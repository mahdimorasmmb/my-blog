import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Featured = () => {
  return (
    <div dir="rtl" className="mt-4 text-justify">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  xl:text-7xl text-neutral-900 dark:text-neutral-50">
        <b>سلام وبلاگ من اینجاست </b>
        داستان ها و و ایده های خلاقانه من را به بینید
      </h1>
      <div className="mt-10 flex items-center gap-12">
        <div className=" hidden lg:block  flex-1 h-[400px] relative">
          <Image src="/p1.jpeg" alt="" fill objectFit="cover" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl dark:text-neutral-50 text-neutral-900 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-neutral-700 dark:text-neutral-400">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده
          </p>{" "}
          <div className="w-max rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]">
            <Button
              className="w-full dark:text-white dark:bg-neutral-950 bg-white"
              variant={"outline"}
            >
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                ادامه مطلب
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
