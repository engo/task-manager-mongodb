const express = require('express')
require('./db/mongoose')
const bcrypt = require('bcryptjs')

const userRouter  = require('./routers/user')
const taskRouter  = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id:'abc123'}, 'asdasdookas', {expiresIn: '1 seconds'})
    console.log(token)
    const data = jwt.verify(token, 'asdasdookas')
    console.log(data)
}

myFunction()