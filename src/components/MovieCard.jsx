import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/ui/uiSlice";
import { addToWatchlist } from "../features/watchlist/watchlistSlice";
import { createSelector } from "@reduxjs/toolkit";
import { addContinueWatching } from "../features/watchlist/watchlistSlice";

// ✅ memoized selector per profile
const makeSelectWatchlistForProfile = () =>
  createSelector(
    (state) => state.watchlist.lists,
    (_, profileId) => profileId,
    (lists, profileId) => lists[profileId] || []
  );

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const profileId = useSelector(
    (state) => state.ui.activeProfile?.id
  );

  const selectWatchlist = makeSelectWatchlistForProfile();

  const watchlist = useSelector((state) =>
    profileId ? selectWatchlist(state, profileId) : []
  );

  const isInWatchlist = profileId
    ? watchlist.includes(movie.id)
    : false;

  const handleAdd = () => {
    if (!profileId) return;

    dispatch(
      addToWatchlist({
        profileId,
        movieId: movie.id,
      })
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 0.3 }}
      className="relative w-40 md:w-48 flex-shrink-0 cursor-pointer group"
    >
      {movie.top10 && (
        <div className="absolute left-2 top-2 bg-red-600 text-xs font-bold px-2 py-1 rounded z-20">
          TOP 10
        </div>
      )}

      <img
        src={movie.poster}
        alt={movie.title}
        className="rounded-lg w-full"
      />

      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-2 rounded-lg">
        <p className="text-sm font-semibold line-clamp-2">
          {movie.title}
        </p>

        <div className="flex gap-2 mt-2">
          <button
  onClick={() => {
    dispatch(openModal(movie));

    if (profileId) {
      dispatch(
        addContinueWatching({
          profileId,
          movieId: movie.id,
        })
      );
    }
  }}
  className="bg-white text-black px-2 py-1 text-xs rounded"
>
  ▶ Play
</button>


          <button
            disabled={!profileId || isInWatchlist}
            onClick={handleAdd}
            className={`px-2 py-1 text-xs rounded ${
              !profileId || isInWatchlist
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {!profileId
              ? "Select Profile"
              : isInWatchlist
              ? "✓ Added"
              : "+ List"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
