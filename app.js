const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
// allows access to req.body
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
// not found middleware for directing user to not found page
app.use(notFound)
// error-handler middleware 
app.use(errorHandler)

const port = process.env.PORT || 3000

// establishes connection to database and port to listen
const start = () => {
    try {
        if (connectDB(process.env.MONGO_URI)) {
            app.listen(port, console.log(`listening at port ${port}`))
        }
    } catch (error) {
        console.log(error)
    }
}

start()