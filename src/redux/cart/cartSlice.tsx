import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types/cartTypes.ts (optional but recommended)
export interface CartItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

interface CartState {
    items: Record<number, CartItem>;
}

const initialState: CartState = {
    items: {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<{
                id: number;
                name: string;
                price: number;
                imageUrl: string;
            }>
        ) => {
            const item = state.items[action.payload.id];
            if (item) {
                item.quantity += 1;
            } else {
                state.items[action.payload.id] = {
                    ...action.payload,
                    quantity: 1,
                };
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            delete state.items[action.payload];
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items[action.payload];
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items[action.payload];
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                delete state.items[action.payload];
            }
        },

        updateQuantity: (
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const item = state.items[action.payload.id];
            if (item) {
                if (action.payload.quantity > 0) {
                    item.quantity = action.payload.quantity;
                } else {
                    delete state.items[action.payload.id];
                }
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    updateQuantity, 
} = cartSlice.actions;

export default cartSlice.reducer;
