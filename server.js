const express = require('express');
const color = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./src/config/db')

const port = process.env.PORT || 3000

connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/comment', require('./src/routes/commentRoute'))
app.use('/api/v1/product', require('./src/routes/productRoute'))
app.use('/api/v1/video', require('./src/routes/videoRoute'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    }
)