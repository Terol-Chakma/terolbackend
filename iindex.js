// console.log("Backend developer")

require('dotenv').config()
const express = require('express') //a variable(import express) using require fn. of    express, as it imported, we can use all the fn. of it
const app = express()   // import app , a fn of express --> 
const port = 3000   // import port : sometimes may busy this port on that time have to use another port using .env --> port = 4000

app.get('/', (req, res) => {    // get is a request, '/' is home route, use with callback
  res.send('Hello World!')  // send is for print/output 'res' is the place-> where the response called
})

// another request 
app.get('/twitter', (req, res) => {
    res.send('terol_server')
})

app.get('/login', (req, res) => {
    res.send("<h1> please login at terol</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2> welcome</h2>")
})

// app.listen(port, () => {    //listen --> server is always listening(have to)
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {  
  console.log(`Example app listening on port ${port}`)
})
