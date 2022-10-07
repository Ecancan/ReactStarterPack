import { createSlice } from '@reduxjs/toolkit';
interface LoadingSlice {
  loading: number;
}

const initialState: LoadingSlice = {
  loading: 0
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    increase: (state) => {
      state.loading += 1;
    },
    decrease: (state) => {
      state.loading -= 1;
    },
    reset: (state) => {
      state.loading = 0;
    }
  }
});

export const { increase, decrease, reset } = loadingSlice.actions;
