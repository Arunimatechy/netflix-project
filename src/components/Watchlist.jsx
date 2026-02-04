import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../features/watchlist/watchlistSlice";
import MovieCard from "./MovieCard";

const WatchlistPage = ({ profileId }) => {
  const dispatch = useDispatch();

  // ✅ ids for current profile
  const watchlistIds =
    useSelector((state) => state.watchlist.lists[profileId]) || [];

  // ✅ get all movies safely
  const categories = useSelector((state) => state.movies.categories) || {};
  const allMovies = Object.values(categories).flat();

  const watchlistMovies = allMovies.filter((movie) =>
    watchlistIds.includes(movie.id)
  );

  if (!profileId) {
    return (
      <div className="pt-28 px-6 text-gray-400">
        No profile selected
      </div>
    );
  }

  if (watchlistMovies.length === 0) {
    return (
      <div className="pt-28 px-6 text-gray-400">
        Your watchlist is empty
      </div>
    );
  }

  return (
    <div className="pt-28 px-6">
      <h2 className="text-2xl font-bold mb-6">My List</h2>

      <div className="flex gap-4 flex-wrap">
        {watchlistMovies.map((movie) => (
          <div key={movie.id} className="relative">
            {/* ✅ PASS profileId */}
            <MovieCard movie={movie} profileId={profileId} />

            <button
              onClick={() =>
                dispatch(
                  removeFromWatchlist({
                    profileId,
                    movieId: movie.id,
                  })
                )
              }
              className="absolute top-2 right-2 bg-black/70 text-xs px-2 py-1 rounded"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;

