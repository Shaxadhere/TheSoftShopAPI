const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
require('dotenv').config()
const categoryRoutes = require('./routes/CategoryRoutes')
const colorRoutes = require('./routes/ColorRoutes')
const customerRoutes = require('./routes/CustomerRoutes')
const productRoutes = require('./routes/ProductRoutes')
const sizeRoutes = require('./routes/SizeRoutes')
const userRoutes = require('./routes/UserRoutes')
// const inventoryRoutes = require('./routes/InventoryRoutes')
// const authRoutes = require('./routes/AuthRoutes')

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
app.use('/color', colorRoutes)
app.use('/customer', customerRoutes)
// app.use('/inventory', inventoryRoutes)
app.use('/product', productRoutes)
// app.use('/inventory', inventoryRoutes)
app.use('/size', sizeRoutes)
// app.use('/user', userRoutes)

//listen to server
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening to server on ${port}`)
})
