import { useRef } from "react";
import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeletonCard";

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);

  const scroll = (x) => {
    rowRef.current.scrollLeft += x;
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-8 relative">
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll(-400)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 px-3 py-2"
      >
        ◀
      </button>

      {/* MOVIE ROW */}
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-10"
      >
        {movies.length === 0
  ? Array(6)
      .fill(0)
      .map((_, i) => <SkeletonCard key={i} />)
  : movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}

      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll(400)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 px-3 py-2"
      >
        ▶
      </button>
    </div>
  );
};

export default MovieRow;
