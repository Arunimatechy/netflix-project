import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import watchlistReducer from "../features/watchlist/watchlistSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchlist: watchlistReducer,
    ui: uiReducer,
  },
});
