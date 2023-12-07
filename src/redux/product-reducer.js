
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price,image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * price;
      } else {
        state.items.push({ id, name, price, image,quantity: 1, totalPrice: price });
      }

      state.total += price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const removedItem = state.items.find((item) => item.id === productId);

      state.items = state.items.filter((item) => item.id !== productId);
      state.total -= removedItem.totalPrice;
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
      state.total += existingItem.price;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.total -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
