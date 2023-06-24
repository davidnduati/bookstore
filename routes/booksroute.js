const express = require('express')
const{allbooks,get1book,createbook}=require('../controllers/bookscontrollers')

const booksroute = express.Router();

booksroute.get('/allbooks',allbooks)
booksroute.get('/get1book/:id',get1book)
booksroute.post('/createbook',createbook)

module.exports = booksroute
