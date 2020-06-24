import http from 'http'
import socketio from 'socket.io'

import app from './api/app'
// import connectWS from './ws'
// import connectDB from './db'

const PORT = process.env.PORT || 5000
const server = http.createServer(app)
// connectWS()
// connectDB()

server.listen(PORT, () => {
  // Connect to DB
  console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

const io = socketio(server)

io.on('connection', () => console.log('New WS Connection'))
