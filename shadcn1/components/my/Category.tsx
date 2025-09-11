import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export const Category = () => {
  return (
    <div className="flex justify-between max-w-[1280px] m-auto mt-[52px]">
      <h3 className="text-6 leading-8 font-[600]">Upcoming</h3>
      <Link
        href={"/SeeMore"}
        className="flex gap-2 items-center text-[14px] leading-5 font-[500]"
      >
        {" "}
        See more <FiArrowRight width={16} height={16} />
      </Link>
    </div>
  );
};
