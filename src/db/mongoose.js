const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/task-manager`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

