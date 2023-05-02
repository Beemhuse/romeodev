import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/addItem/productSlice.js';
export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});


export default store