import http from 'http'
import dotenv from 'dotenv'

import app from './api/app'
import connectWS from './config/ws'
import connectDB from './config/db'

dotenv.config()

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(PORT, () => {
  connectWS()
  connectDB()
  console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
