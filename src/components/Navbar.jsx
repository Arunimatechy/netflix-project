import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import { filterMovies } from "../features/movies/moviesSlice";
import { clearActiveProfile } from "../features/ui/uiSlice";
import { useDebounce } from "../hooks/useDebounce";

const Navbar = ({ onLogout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ redux profile
  const profile = useSelector((state) => state.ui.activeProfile);

  // ✅ local state
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);

  // ✅ debounce AFTER query exists
  const debouncedQuery = useDebounce(query, 400);

  const lastScroll = useRef(0);
  const profileRef = useRef(null);

  /* ==========================
     DEBOUNCED SEARCH
  ========================== */
  useEffect(() => {
    dispatch(filterMovies(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  /* ==========================
     HIDE NAVBAR ON SCROLL
  ========================== */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShow(current < lastScroll.current || current < 60);
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ==========================
     CLOSE PROFILE ON OUTSIDE CLICK
  ========================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    setOpenProfile(false);
    dispatch(clearActiveProfile());
    onLogout?.();
    navigate("/profiles");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        show ? "bg-black/80" : "-top-24"
      } px-6 py-4 flex items-center justify-between`}
    >
      {/* LEFT */}
      <h1
        onClick={() => navigate("/")}
        className="text-red-600 text-3xl font-extrabold cursor-pointer"
      >
        NETFLIX
      </h1>

      {/* CENTER */}
      <div className="flex items-center gap-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies"
          aria-label="Search movies"
          role="searchbox"
          className="bg-black/60 border px-3 py-1 rounded"
        />

        {profile && (
          <button
            onClick={() => navigate("/watchlist")}
            className="flex items-center gap-2 px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
          >
            <FaPlus size={12} />
            <span className="text-sm">My List</span>
          </button>
        )}
      </div>

      {/* RIGHT */}
      {profile && (
        <div ref={profileRef} className="relative">
          <img
            src={profile.avatar}
            onClick={() => setOpenProfile((p) => !p)}
            className="w-8 h-8 rounded-full cursor-pointer"
            alt="profile"
          />

          {openProfile && (
            <div className="absolute right-0 mt-2 bg-black border rounded w-40">
              <p
                onClick={logout}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                Logout
              </p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
