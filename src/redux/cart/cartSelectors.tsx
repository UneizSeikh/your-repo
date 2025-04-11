import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCartItemsObject = (state: RootState) => state.cart.items;

export const selectCartItemsArray = createSelector(
    [selectCartItemsObject],
    (itemsObject) => Object.values(itemsObject)
);
