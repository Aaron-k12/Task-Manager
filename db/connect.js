const mongoose = require('mongoose')

/** Function accepts an authorized url to establish a connection to the mongodb database using mongoose
 * the second parameter of the .connect version 6+
 */
const connectDB = (url) => {
    return mongoose.connect(url,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}

module.exports = connectDB

