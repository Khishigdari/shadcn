import React from "react";
import { IoChevronForward } from "react-icons/io5";

export const GenreFilter = () => {
  return (
    <div className="flex gap-4 w-[387px] flex-wrap">
      <a
        href="#"
        className="border border-[#E4E4E7] py-[2px] pl-[10px] pr-1 w-fit rounded-full flex gap-[14px] items-center"
      >
        Action <IoChevronForward width={4} height={8} />
      </a>
      <a
        href="#"
        className="border border-[#E4E4E7] py-[2px] pl-[10px] pr-1 w-fit rounded-full flex gap-[14px] items-center"
      >
        Adventure <IoChevronForward width={4} height={8} />
      </a>
      <a
        href="#"
        className="border border-[#E4E4E7] py-[2px] pl-[10px] pr-1 w-fit rounded-full flex gap-[14px] items-center"
      >
        Animation <IoChevronForward width={4} height={8} />
      </a>
      <a
        href="#"
        className="border border-[#E4E4E7] py-[2px] pl-[10px] pr-1 w-fit rounded-full flex gap-[14px] items-center"
      >
        Biography <IoChevronForward width={4} height={8} />
      </a>
      <a
        href="#"
        className="border border-[#E4E4E7] py-[2px] pl-[10px] pr-1 w-fit rounded-full flex gap-[14px] items-center"
      >
        Comedy <IoChevronForward width={4} height={8} />
      </a>
      <a
        href="#"
        className="border border-[#E4E4E7] py-[2px] pl-[10px] pr-1 w-fit rounded-full flex gap-[14px] items-center"
      >
        Crime <IoChevronForward width={4} height={8} />
      </a>
    </div>
  );
};
