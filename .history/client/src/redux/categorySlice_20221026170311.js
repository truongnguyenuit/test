import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",

  initialState: {
    categories: []
  },

  reducers: {
    getAllcategories: (state, action) => {
      state.categories = action.payload
    },
    createCategory: (state, action) => {
      let newCategoriesData = [...state.categories, action.payload]
      state.categories = newCategoriesData
    },
    updateCategory: (state, action) => {
      let updatedIndex = state.categories.findIndex(category => category._id === action.payload._id)
      let newCategoriesData = [...state.categories]
      newCategoriesData.splice(updatedIndex, 1, action.payload)
      state.categories = newCategoriesData
    },
    deleteCategory: (state, action) => { 
      let newCategoriesData = state.categories.filter(author => author._id !== action.payload)     
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