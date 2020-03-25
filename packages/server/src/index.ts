import http from 'http'

import app from './api/app'
import connectWS from './ws'

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(PORT, () => {
  // Connect to DB
  connectWS()
  console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
