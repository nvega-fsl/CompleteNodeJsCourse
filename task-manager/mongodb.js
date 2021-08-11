const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaaseName)

   
    db.collection('users').deleteMany({
        age: 68
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)

    })
})



