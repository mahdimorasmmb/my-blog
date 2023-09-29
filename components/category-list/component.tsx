import { CollectionColor, CollectionColors } from "@/lib/contants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const listCategories = [
  {
    imageSrc: "/style.png",
    text: "سبک",
    href: "blog?cat=style",
    bgColor:'candy'
  },
  {
    imageSrc: "/travel.png",
    text: "مسافرت رفتن",
    href: "blog?cat=travel",
    bgColor:'firtree'
  },
  {
    imageSrc: "/food.png",
    text: "غذا",
    href: "blog?cat=food",
    bgColor:'metal'
  },
  {
    imageSrc: "/fashion.png",
    text: "مد ",
    href: "blog?cat=fashion",
    bgColor:'poppy'
  },
  {
    imageSrc: "/style.png",
    text: "سبک",
    href: "blog?cat=style",
    bgColor:'powder'
  },
  {
    imageSrc: "/travel.png",
    text:  "مسافرت رفتن",
    href: "blog?cat=travel",
    bgColor:'rosebud'
  },
];



const CategoryList = () => {
  return (
    <div dir="rtl">
      <h1 className="my-12">دسته بندی های محبوب</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-5 ">
        {listCategories.map((item, index) => (
          <Link key={`${item.text}_${index}`} href={item.href} className={cn(' bg-opacity-40 rounded-xl',CollectionColors[item.bgColor as CollectionColor])} >
            <div dir="" className={cn('flex  items-center justify-center gap-3 capitalize   h-20 ')}>
              <Image
                src={item.imageSrc}
                alt={item.text}
                width={40}
                height={40}
                objectFit="cover"
                className="rounded-[50px] w-10 h-10"
              />
              <span> {item.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
