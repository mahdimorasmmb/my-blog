import React from "react";
import Pagination from "../pagination";
import Card from "./card";

const list = Array.from({ length: 10 }, (_, i) => i + 1);

const CardList = () => {
  return (
    <aside className="w-8/12 mt-10 px-10">
      <h3 className="mb-20 text-3xl  font-black">پستهای اخیر</h3>
      <div className="flex flex-col gap-5">
        {list.map((item) => (
          <Card key={item} />
        ))}
      </div>
      <Pagination />
    </aside>
  );
};
export default CardList;
