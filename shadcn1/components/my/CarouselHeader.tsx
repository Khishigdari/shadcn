import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { Button } from "../ui/button";

const carousel = [
  {
    image: "/images/1.jpg",
    title: "Wicked",
    rating: 6.9,
    descr:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
  {
    image: "/images/2.png",
    title: "Gladiator II",
    rating: 6.9,
    descr:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
  },
  {
    image: "/images/3.jpg",
    title: "Moana 2",
    rating: 6.9,
    descr:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
  },
];

export const CarouselHeader = () => {
  return (
    <div className="flex justify-center">
      <Carousel className="w-[1440px] mt-6">
        <CarouselContent>
          {carousel.map((item, index) => (
            <CarouselItem className="flex justify-center relative" key={index}>
              <Image
                src={item.image}
                alt=""
                width={1440}
                height={600}
                className="w-[1440px]  h-[600px] shrink-0 "
              ></Image>
              <div className="absolute left-[140px] top-[178px] text-[#FAFAFA] ">
                <p className="text-[16px] leading-[24px]">Now Playing:</p>
                <h1 className="text-[36px] leading-[40px] font-[700] mb-[10px]">
                  {item.title}
                </h1>
                <div className="flex items-center gap-[6px] mb-[26px]">
                  <FaStar color="#FDE047" width={23} height={23} />
                  <p className="text-[18px] leading-[28px] font-[600]">
                    {item.rating}
                    <span className="text-[16px] leading-[24px] text-[#71717A]">
                      /10
                    </span>
                  </p>
                </div>
                <p className="w-[302px] text-[12px] leading-[16px] mb-[16px]">
                  {item.descr}
                </p>
                <Button className="px-[16px] bg-[#F4F4F5] text-[14px] leading-[20px] text-[#18181B] hover:text-[#FAFAFA]">
                  <FiPlay />
                  Watch Trailer
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-11 top-[280px] " />
        <CarouselNext className="absolute right-11 top-[280px] " />
      </Carousel>
    </div>
  );
};
