import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "auth",

  initialState: {
    authLoading: true,
    isAuthenticated: false,
    user: null,
    accessToken: null,
  },

  reducers: {
    login: (state, action) => {
      state.authLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken
    },
    logout: (state, action) => {
      
    }
  }
})

export const {
  login,
  logout
} = authorSlice.actions

export default authorSlice.reducer