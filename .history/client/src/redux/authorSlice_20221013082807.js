import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "author",

  initialState: {
    authors: []
  },

  reducers: {
    getAllAuthors: (state, action) => {
      state.authors = action.payload
    },
    addAuthor: (state, action) => {
      let newAuthorsData = [...state.authors, action.payload]
      state.authors = newAuthorsData
    },
    updateAuthor: (state, action) => {
      
    }
    deleteAuthor: (state, action) => {
      let newAuthorData = state.authors
    }
  }
})

export const {
  getAllAuthors
} = authorSlice.actions

export default authorSlice.reducer