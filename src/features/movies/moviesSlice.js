import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../data/movies";

const initialState = {
  categories: movies,
  filtered: [],        // 👈 IMPORTANT: start empty
  searchQuery: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // 🔍 SEARCH
    filterMovies(state, action) {
      state.searchQuery = action.payload.toLowerCase();
      state.filtered = Object.values(state.categories)
        .flat()
        .filter((movie) =>
          movie.title.toLowerCase().includes(state.searchQuery)
        );
    },

    // 🎭 GENRE FILTER (REPLACED)
    filterMoviesByGenre(state, action) {
      const key = action.payload;
      state.searchQuery = "";

      // ALL button → show home rows
      if (key === "all") {
        state.filtered = [];
        return;
      }

      // Single category
      state.filtered = state.categories[key] || [];
    },

    // ❤️ LIKE
    likeMovie(state, action) {
      const movie = Object.values(state.categories)
        .flat()
        .find((m) => m.id === action.payload);

      if (movie) {
        movie.likes = (movie.likes || 0) + 1;
      }
    },
  },
});

export const {
  filterMovies,
  filterMoviesByGenre,
  likeMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;


