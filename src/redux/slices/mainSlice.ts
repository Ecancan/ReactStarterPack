import { createSlice } from '@reduxjs/toolkit';
interface MainSlice {
  isLoggedIn: boolean;
}

const initialState: MainSlice = {
  isLoggedIn: false
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  }
});

export const { setIsLoggedIn } = mainSlice.actions;
