import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "author",

  initialState: {
    authors: []
  },

  reducers: {
    getAllAuthors: (state, action) => {
      state.authors = false
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