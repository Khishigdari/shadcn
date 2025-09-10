import React from "react";
import { IoChevronForward } from "react-icons/io5";

const genres = [
  {
    genre: "Action",
  },
  {
    genre: "Adventure",
  },
  {
    genre: "Animation",
  },
  {
    genre: "Action",
  },
  {
    genre: "Biography",
  },
  {
    genre: "Comedy",
  },
  {
    genre: "Crime",
  },
  {
    genre: "Documentary",
  },
  {
    genre: "Drama",
  },
  {
    genre: "Family",
  },
  {
    genre: "Fantasy",
  },
  {
    genre: "Film-Noir",
  },
  {
    genre: "Game-Show",
  },
  {
    genre: "History",
  },
  {
    genre: "Horror",
  },
  {
    genre: "Music",
  },
  {
    genre: "Musical",
  },
  {
    genre: "Mystery",
  },
  {
    genre: "News",
  },
  {
    genre: "Reality-TV",
  },
  {
    genre: "Romance",
  },
  {
    genre: "Sci-Fi",
  },
  {
    genre: "Short",
  },
  {
    genre: "Sport",
  },
  {
    genre: "Talk-Show",
  },
  {
    genre: "Thriller",
  },
  {
    genre: "War",
  },
  {
    genre: "Western",
  },
];

export const GenreFilter = () => {
  return (
    <div className="flex gap-4 w-[387px] flex-wrap">
      {genres.map((item, index) => (
        <a
          key={index}
          href="#"
          className="border border-[#E4E4E7] py-[2px] pl-[10px] pr-1 w-fit rounded-full flex gap-[14px] items-center"
        >
          {item.genre}
          <IoChevronForward width={4} height={8} />
        </a>
      ))}
    </div>
  );
};
