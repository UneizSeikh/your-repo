import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import counterReducer from './counter/counterSlice';
import favoriteReducer from './favorite/favoriteSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({
    cart: cartReducer,
    counter: counterReducer,
    favorite: favoriteReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'counter', 'favorite'], // slices to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // required for redux-persist
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;