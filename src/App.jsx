// import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import Modal from "./components/Modal";
import WatchlistPage from "./components/Watchlist";
import MovieDetails from "./components/MovieDetails";
import ProfileSelect from "./pages/ProfileSelect";
import { Routes, Route, Navigate } from "react-router-dom";

import { filterMoviesByGenre } from "./features/movies/moviesSlice";
import { clearActiveProfile } from "./features/ui/uiSlice";

function App() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.movies.categories);
  const filteredMovies = useSelector((state) => state.movies.filtered);
  const profile = useSelector((state) => state.ui.activeProfile);

  /* ===========================
     CONTINUE WATCHING LOGIC
  ============================ */
  const continueWatchingIds =
    useSelector(
      (state) =>
        state.watchlist.continueWatching?.[profile?.id]
    ) || [];

  const allMovies = Object.values(categories || {}).flat();

  const continueWatching = allMovies.filter((movie) =>
    continueWatchingIds.includes(movie.id)
  );

  const handleGenreClick = (genre) => {
    dispatch(filterMoviesByGenre(genre));
  };

  const handleLogout = () => {
    dispatch(clearActiveProfile());
  };

  return (
    <Routes>
      {/* PROFILE SELECTION */}
      <Route path="/profiles" element={<ProfileSelect />} />

      {/* PROTECTED APP */}
      {profile ? (
        <Route
          path="/*"
          element={
            <div className="bg-black min-h-screen text-white">
              <Navbar profile={profile} onLogout={handleLogout} />

              {/* GENRE BUTTONS */}
              <div className="pt-24 px-6">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                  {["all", ...Object.keys(categories || {})].map((key) => (
                    <button
                      key={key}
                      onClick={() => handleGenreClick(key)}
                      className={`
                        px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap
                        transition-all duration-300
                        ${
                          (key === "all" && filteredMovies.length === 0) ||
                          filteredMovies === categories[key]
                            ? "bg-white text-black scale-105"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                        }
                      `}
                    >
                      {key === "all" ? "ALL" : key.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* MAIN ROUTES */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroBanner movies={categories?.trending || []} />

                      {/* ✅ CONTINUE WATCHING */}
                      {continueWatching.length > 0 && (
                        <MovieRow
                          title="Continue Watching"
                          movies={continueWatching}
                          profileId={profile.id}
                        />
                      )}

                      {filteredMovies.length > 0 ? (
                        <MovieRow
                          title="Browse"
                          movies={filteredMovies}
                          profileId={profile.id}
                        />
                      ) : (
                        <>
                          <MovieRow
                            title="Trending Now"
                            movies={categories?.trending || []}
                            profileId={profile.id}
                          />
                          <MovieRow
                            title="Top Rated"
                            movies={categories?.topRated || []}
                            profileId={profile.id}
                          />
                          <MovieRow
                            title="Action"
                            movies={categories?.action || []}
                            profileId={profile.id}
                          />
                          <MovieRow
                            title="Sci-Fi"
                            movies={categories?.sciFi || []}
                            profileId={profile.id}
                          />
                          <MovieRow
                            title="Drama"
                            movies={categories?.drama || []}
                            profileId={profile.id}
                          />
                        </>
                      )}
                    </>
                  }
                />

                <Route
                  path="/watchlist"
                  element={<WatchlistPage profileId={profile.id} />}
                />

                <Route path="/movie/:id" element={<MovieDetails />} />
              </Routes>

              <Modal />
            </div>
          }
        />
      ) : (
        <Route path="*" element={<Navigate to="/profiles" />} />
      )}
    </Routes>
  );
}

export default App;
