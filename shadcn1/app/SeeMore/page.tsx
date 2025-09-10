import { Footer, MovieCard } from "@/components/my";
import PagePagination from "@/components/my/PagePagination";
import React from "react";

const movies = [
  {
    image: "/images/1-1.svg",
    title: "Dear Santa",
    rating: 6.9,
  },
  {
    image: "/images/1-2.svg",
    title: "How To Train Your Dragon Live Action",
    rating: 6.9,
  },
  {
    image: "/images/1-3.svg",
    title: "Alien Romulus",
    rating: 6.9,
  },
  {
    image: "/images/1-4.svg",
    title: "From The Ashes",
    rating: 6.9,
  },
  {
    image: "/images/1-5.svg",
    title: "Space Dogg",
    rating: 6.9,
  },
  {
    image: "/images/2-1.svg",
    title: "DThe Order",
    rating: 6.9,
  },
  {
    image: "/images/2-2.svg",
    title: "Y2K",
    rating: 6.9,
  },
  {
    image: "/images/2-3.svg",
    title: "Solo Leveling: ReAwakening",
    rating: 6.9,
  },
  {
    image: "/images/2-4.svg",
    title: "Get Away",
    rating: 6.9,
  },
  {
    image: "/images/2-5.svg",
    title: "Sonic the Hedgehog 3",
    rating: 6.9,
  },
];

const SeeMore = () => {
  return (
    <div>
      <div className="mt-[52px] w-[1437px]">
        <div className="flex justify-between mx-[80px]">
          <h3 className="text-6 leading-8 font-[600]">Upcoming</h3>
        </div>
        <div className="inter flex gap-[32px] mt-8 flex-wrap justify-center">
          {movies.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                image={movie.image}
                title={movie.title}
                rating={movie.rating}
              />
            );
          })}
        </div>
      </div>
      <PagePagination />
    </div>
  );
};

export default SeeMore;
