import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import React from "react";

export const CarouselHeader = () => {
  return (
    <div className="flex justify-center">
      <Carousel className="w-[1440px] mt-6">
        <CarouselContent>
          <CarouselItem className="flex justify-center relative">
            <Image
              src={"/images/1.jpg"}
              alt=""
              width={1440}
              height={600}
              className="w-[1440px]  h-[600px] shrink-0 "
            ></Image>
          </CarouselItem>
          <CarouselItem className="flex justify-center relative">
            <Image
              src={"/images/2.png"}
              alt=""
              width={1440}
              height={600}
              className="w-[1440px] h-[600px] shrink-0"
            ></Image>
          </CarouselItem>
          <CarouselItem className="flex justify-center relative">
            <Image
              src={"/images/3.jpg"}
              alt=""
              width={1440}
              height={600}
              className="w-[1440px]  h-[600px] shrink-0"
            ></Image>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-11 top-[280px] " />
        <CarouselNext className="absolute right-11 top-[280px] " />
      </Carousel>
    </div>
  );
};
