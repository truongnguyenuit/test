const express = require('express')
const verifyToken = require('../middleware/auth')
const Author = require('../models/Author')

const router = express.Router()

router.post('/', verifyToken, async (req, res) => {
  const { fullName, address, avatarUrl, birthDate } = req.body
  if (!fullName || !address || !avatarUrl || !birthDate)
    return res.status(400).json({ success: false, message: "Lack Of Infomation"})
  try {
    const newAuthor = new Author({
      fullName: fullName,
      address: address,
      avatarUrl: avatarUrl,
      birthDate: birthDate
    })
    await newAuthor.save()
    res.status(200).json({ success: true, message: "Create Author Successful!!!"})
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error'})
  }
})

router.get('/getAllAuthors', verifyToken, async (req,res) => { 
  try {
    const authors = await Author.find().populate()
    res.json({ success: true, authors })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

router.put('/updateAuthor', verifyToken, async (req,res) => {
  
})
module.exports = router