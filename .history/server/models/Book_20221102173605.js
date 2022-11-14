const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  coverUrl: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  publishedBy: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  rating: {
    type: Number,
    default: 0
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'comment'
    }
  ],
  price: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    default: 0
  },
  category: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'category'
    }
  ],
  authors: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'author'
    }
  ],
})

module.exports = mongoose.model('book', BookSchema)
