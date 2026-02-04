// import { useDispatch } from "react-redux";
// import { openModal } from "../features/ui/uiSlice";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const HeroBanner = ({ movies = [] }) => {
//   const dispatch = useDispatch();
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (!movies.length) return;
//     const timer = setInterval(
//       () => setIndex((i) => (i + 1) % movies.length),
//       7000
//     );
//     return () => clearInterval(timer);
//   }, [movies.length]);

//   const movie = movies[index];
//   if (!movie) return null;

//   return (
//     <div className="relative h-[80vh] bg-black overflow-hidden">
//       <AnimatePresence>
//         <motion.div
//           key={movie.id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <img
//             src={movie.poster}
//             alt={movie.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
//           <div className="absolute bottom-24 left-10 max-w-xl text-white">
//             <h1 className="text-5xl font-extrabold mb-4">{movie.title}</h1>
//             <p className="text-gray-300 mb-6 line-clamp-3">{movie.overview}</p>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => dispatch(openModal(movie))}
//                 className="bg-white text-black px-6 py-2 rounded font-semibold"
//               >
//                 ▶ Play
//               </button>
//               <button
//                 onClick={() => dispatch(openModal(movie))}
//                 className="bg-gray-700/80 px-6 py-2 rounded"
//               >
//                 ℹ More Info
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HeroBanner;



import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import { openModal } from "../features/ui/uiSlice";
import { addContinueWatching } from "../features/watchlist/watchlistSlice";

const HeroBanner = ({ movies = [] }) => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.ui.activeProfile);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  /* ==========================
     AUTO ROTATE BANNER
  ========================== */
  useEffect(() => {
    if (!movies.length || paused) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % movies.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [movies.length, paused]);

  const movie = movies[index];
  if (!movie) return null;

  const handlePlay = () => {
    dispatch(openModal(movie));

    if (profile) {
      dispatch(
        addContinueWatching({
          profileId: profile.id,
          movieId: movie.id,
        })
      );
    }
  };

  return (
    <div
      className="relative h-[80vh] bg-black overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.div
          key={movie.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="w-full h-full object-cover"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          {/* CONTENT */}
          <div className="absolute bottom-24 left-10 max-w-xl text-white">
            <h1 className="text-5xl font-extrabold mb-4">
              {movie.title}
            </h1>

            <p className="text-gray-300 mb-6 line-clamp-3">
              {movie.overview}
            </p>

            <div className="flex gap-4">
              <button
                onClick={handlePlay}
                aria-label={`Play ${movie.title}`}
                className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition"
              >
                ▶ Play
              </button>

              <button
                onClick={() => dispatch(openModal(movie))}
                aria-label={`More info about ${movie.title}`}
                className="bg-gray-700/80 px-6 py-2 rounded hover:bg-gray-600 transition"
              >
                ℹ More Info
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroBanner;
