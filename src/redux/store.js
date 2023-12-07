
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './product-reducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store
