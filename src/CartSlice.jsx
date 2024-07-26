import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItemToCart: (state, action) => {
        debugger;
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
    removeItemFromCart: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantityAtCart: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
    
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateQuantityAtCart } = CartSlice.actions;

export default CartSlice.reducer;
