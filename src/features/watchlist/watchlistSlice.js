// import { createSlice } from "@reduxjs/toolkit";

// const saved = localStorage.getItem("watchlists");

// const initialState = {
//   lists: saved ? JSON.parse(saved) : {}, // { profileId: [movieId] }
// };

// const watchlistSlice = createSlice({
//   name: "watchlist",
//   initialState,
//   reducers: {
//     addToWatchlist(state, action) {
//       const { profileId, movieId } = action.payload;

//       if (!state.lists[profileId]) {
//         state.lists[profileId] = [];
//       }

//       if (!state.lists[profileId].includes(movieId)) {
//         state.lists[profileId].push(movieId);
//       }

//       localStorage.setItem(
//         "watchlists",
//         JSON.stringify(state.lists)
//       );
//     },

//     removeFromWatchlist(state, action) {
//       const { profileId, movieId } = action.payload;

//       state.lists[profileId] =
//         state.lists[profileId]?.filter((id) => id !== movieId) || [];

//       localStorage.setItem(
//         "watchlists",
//         JSON.stringify(state.lists)
//       );
//     },
//   },
// });

// export const { addToWatchlist, removeFromWatchlist } =
//   watchlistSlice.actions;

// export default watchlistSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const saved = localStorage.getItem("watchlists");

const initialState = {
  lists: saved ? JSON.parse(saved) : {},
  continueWatching:
    JSON.parse(localStorage.getItem("continueWatching")) || {},
  // { profileId: [movieId] }
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // ➕ ADD TO WATCHLIST
    addToWatchlist(state, action) {
      const { profileId, movieId } = action.payload;

      if (!state.lists[profileId]) {
        state.lists[profileId] = [];
      }

      if (!state.lists[profileId].includes(movieId)) {
        state.lists[profileId].push(movieId);
      }

      localStorage.setItem(
        "watchlists",
        JSON.stringify(state.lists)
      );
    },

    // ❌ REMOVE FROM WATCHLIST
    removeFromWatchlist(state, action) {
      const { profileId, movieId } = action.payload;

      state.lists[profileId] =
        state.lists[profileId]?.filter((id) => id !== movieId) || [];

      localStorage.setItem(
        "watchlists",
        JSON.stringify(state.lists)
      );
    },

    // ▶ CONTINUE WATCHING
    addContinueWatching(state, action) {
      const { profileId, movieId } = action.payload;

      if (!state.continueWatching[profileId]) {
        state.continueWatching[profileId] = [];
      }

      if (!state.continueWatching[profileId].includes(movieId)) {
        state.continueWatching[profileId].unshift(movieId);
      }

      localStorage.setItem(
        "continueWatching",
        JSON.stringify(state.continueWatching)
      );
    },
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  addContinueWatching,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
