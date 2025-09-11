import { CarouselHeader, MovieCard } from "@/components/my";
import { Category } from "@/components/my/Category";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

async function Home() {
  console.log("KEY", process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY);
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const upcomingMovies: movieResponseType = await getUpcomingMovies();
  console.log(upcomingMovies);
  return (
    <div>
      <CarouselHeader />
      <Category />
      <div className="max-w-[1280px] m-auto">
        <div className="inter flex gap-[32px] mt-8 flex-wrap justify-center">
          {upcomingMovies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
          {/* <SectionContainer /> */}
        </div>
      </div>
    </div>
  );
}
export default Home;
