
// load http module
const http = require('http')

// load third party Express module
const express = require('express')
const app = express()

// define the routes
app.get('/', (req, res) => {
  res.send('truc')
})

app.get('/about', (req, res) => {
  res.send('Hello, this is my about Page')
})

// create the server
const server = http.createServer(app);

// server listen for any incoming requests
server.listen(3000);

console.log('My node.js web server is alive and running at port 3000')