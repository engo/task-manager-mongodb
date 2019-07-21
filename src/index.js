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

const myFunction = async () => {
    const password = "qwertyman123"
    const hashPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashPassword)
}

myFunction()