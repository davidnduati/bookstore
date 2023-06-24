const express = require('express')
const app = express();
const booksroute = require('./routes/booksroute')
const memberroute = require('./routes/memberroute')

app.use(express.json())

// app.use('/',(req,res)=>{
//     res.send("welcome to bookstore")
// })
app.use('/book',booksroute)
 app.use('/member',memberroute)

const port = 4040
app.listen(port,()=>console.log(`server running on port ${port}`))

