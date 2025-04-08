import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  favorites: Record<number, boolean>;
  favoritesCount: number;
}

const initialState: FavoriteState = {
  favorites: {},
  favoritesCount: 0,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavoriteCount: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const isCurrentlyFavorited = !!state.favorites[id];

      state.favorites[id] = !isCurrentlyFavorited;

      // Update counter based on toggle state
      state.favoritesCount += isCurrentlyFavorited ? -1 : 1;
    },
  },
});

export const { toggleFavoriteCount } = favoriteSlice.actions;

export default favoriteSlice.reducer;
