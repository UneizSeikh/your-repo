import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface FavoriteState {
  items: Record<number, FavoriteItem>;
  favoritesCount: number;
}

const initialState: FavoriteState = {
  items: {},
  favoritesCount: 0,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const { id } = action.payload;
      const isFavorite = !!state.items[id];

      if (isFavorite) {
        delete state.items[id];
        state.favoritesCount -= 1;
      } else {
        state.items[id] = action.payload;
        state.favoritesCount += 1;
      }
    },

    removeFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.items[id]) {
        delete state.items[id];
        state.favoritesCount -= 1;
      }
    },
  },
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
