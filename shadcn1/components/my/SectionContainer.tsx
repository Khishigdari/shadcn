import React from "react";
import { MovieCard } from "./MovieCard";

export const MoviesContainer = () => {
  return (
    <div>
      <div className="inter flex gap-[32px] pt-10 pl-10">
        <MovieCard
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
      <div className="inter flex gap-[32px] mt-[32px] ml-10">
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
        ></MovieCard>
      </div>
    </div>
  );
};
