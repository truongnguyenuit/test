import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "book",

  initialState: {
    books: []
  },

  reducers: {
    getAllBooks: (state, action) => {
      state.books = action.payload
    },
    createBook: (state, action) => {
      let newBooksData = [...state.books, action.payload]
      state.books = newBooksData
    },
    updateBook: (state, action) => {
      let updatedIndex = state.books.findIndex(book => book._id === action.payload._id)
      let newBooksData = [...state.books]
      newBooksData.splice(updatedIndex, 1, action.payload)
      state.books = newBooksData
    },
    deleteBook: (state, action) => { 
      let newBooksData = state.books.filter(book => book._id !== action.payload)     
      state.authors = newAuthorsData
    }
  }
})

export const {
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = authorSlice.actions

export default authorSlice.reducer