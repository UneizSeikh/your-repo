import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counter/counterSlice'
import favroiteReducer from '../redux/favorite/favoriteSlice'

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        favorite : favroiteReducer
    }   
})