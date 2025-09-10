import React from "react";
import { MovieCard } from "./MovieCard";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

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
    title: "The Order",
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

export const SectionContainer = () => {
  return (
    <div className="mt-[52px] w-[1437px]">
      <div className="flex justify-between mx-[80px]">
        <h3 className="text-6 leading-8 font-[600]">Upcoming</h3>
        <Link
          href={"/SeeMore"}
          className="flex gap-2 items-center text-[14px] leading-5 font-[500]"
        >
          {" "}
          See more <FiArrowRight width={16} height={16} />
        </Link>
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
        {/* <MovieCard image={movie.image} title={movie.title} rating={movie.rating}/> */}

        {/* <MovieCard
          title="Dear Santa"
          rating={6.9}
          image="./images/1-1.svg"
        ></MovieCard>
        <MovieCard
          title="How To Train Your Dragon Live Action"
          rating={6.9}
          image="./images/1-2.svg"
        ></MovieCard>
        <MovieCard
          title="Alien Romulus
"
          rating={6.9}
          image="./images/1-3.svg"
        ></MovieCard>
        <MovieCard
          title="From the Ashes"
          rating={6.9}
          image="./images/1-4.svg"
        ></MovieCard>
        <MovieCard
          title="Space Dogg"
          rating={6.9}
          image="./images/1-5.svg"
        ></MovieCard>
      </div>
      <div className="inter flex gap-[32px] mt-[32px]">
        <MovieCard
          title="The Order"
          rating={6.9}
          image="./images/2-1.svg"
        ></MovieCard>
        <MovieCard
          title="Y2K"
          rating={6.9}
          image="./images/2-2.svg"
        ></MovieCard>
        <MovieCard
          title="Solo Leveling: ReAwakening
"
          rating={6.9}
          image="./images/2-3.svg"
        ></MovieCard>
        <MovieCard
          title="Get Away"
          rating={6.9}
          image="./images/2-4.svg"
        ></MovieCard>
        <MovieCard
          title="Sonic the Hedgehog 3
"
          rating={6.9}
          image="./images/2-5.svg"
        ></MovieCard> */}
      </div>
    </div>
  );
};
