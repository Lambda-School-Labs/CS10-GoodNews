require('./Tests/node_modules/dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const server = require('./Back-end/API/server')
const path = require('path')
const port = process.env.PORT || 5000

// process.env if it exists OR local version for testing offline.
const mongoURL = process.env.NODE_ENV === 'production' ? process.env.PROD_MONGODB : process.env.MONGODB_LOCAL

mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose
  .connect(mongoURL) // Whatever mongo db database we use will go here
  .then(mongo => {
    console.log('=== Connected to MongoDB server successfully! ===')
  })
  .catch(err => {
    console.error('error', err)
  })
//docs ssr
server.use("/docs", express.static(path.join(__dirname,"docs")))
// For serving static files to root endpoint
server.use(express.static(path.join(__dirname, 'client', 'build')))
server.listen(port, () => console.log(`=== API running on port: ${port}! ===`))
