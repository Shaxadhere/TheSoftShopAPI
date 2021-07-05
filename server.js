const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
require('dotenv').config()
const categoryRoutes = require('./routes/CategoryRoutes')

//app
const app = express()

//database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log(`Connected to database`))

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(expressValidator())

//routes
app.get('/', (req, res) => {
    res.json("Welcome to TheSoftShopAPI")
})
app.use('/category', categoryRoutes)

//listen to server
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening to server on ${port}`)
})
