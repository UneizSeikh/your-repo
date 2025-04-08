import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counter/counterSlice'
import favroiteReducer from '../redux/favorite/favoriteSlice'
import cartReducer from '../redux/cart/cartSlice'

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        favorite : favroiteReducer,
        cart : cartReducer
    }   
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;