const express = require('express');
const app = express();
const cors =require('cors');
const port =3006
const connectdb =require('./config/connecteddb')
const userRoute = require('./routes/routeuser');
require ('dotenv').config()

app.use(cors())
app.use(express.json())

//connection
connectdb()

//path d'auth
app.use('/auth',userRoute)



app.listen(port,err=>{
    err?console.log(err):console.log(`you are connected to the port: ${port}`)
})


