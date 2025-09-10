import { Footer, GenreFilter } from "@/components/my";
import { FilteredMovies } from "@/components/my/FilteredMovies";
import React from "react";

const Genre = () => {
  return (
    <div>
      <div className="pl-20 mt-[52px]">
        <h2 className="text-[30px] leading-9 font-[600] mb-8">Search filter</h2>
        <div className="mb-5">
          <h3 className="mb-1 text-[24px] leading-8 font-[600]">Genres</h3>
          <p className="text-[16px] leading-6">See lists of movies by genre</p>
        </div>
        <GenreFilter />
      </div>
      <FilteredMovies />
    </div>
  );
};

export default Genre;
