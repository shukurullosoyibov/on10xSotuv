// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hidden: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setHidden: (state, action) => {
      state.hidden = action.payload;
    },
  },
});

export const { setHidden } = userSlice.actions;
export default userSlice.reducer;
