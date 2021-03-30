const express = require('express')

const app = express();

require('./index')
var userCtrl = require('./controllers/userController');


const port = 3001

app.get('/', (req, res) => {
    res.send('hello from new app')
})


app.get('/add', userCtrl.addUser)

app.get('/crud', userCtrl.crudOperation)

app.get('/queryData', userCtrl.queryData)

app.get('/finder', userCtrl.finderData)


app.listen(port, () => {
    console.log('app is running on port' + 3001)
})