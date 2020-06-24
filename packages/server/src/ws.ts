import socketio from 'socket.io'

const connectWS = () => {
  console.log('hello')
  const io = socketio()

  io.on('connection', () => {
    console.log('New WS Connection')
  })
}

export default connectWS
