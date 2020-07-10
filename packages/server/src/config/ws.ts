import socketio from 'socket.io'

const connectWS = () => {
  console.log('connection websockets...')
  const io = socketio()

  io.on('connection', () => {
    console.log('New WS Connection')
  })
}

export default connectWS

// const WebSocketServer = require('ws').Server

// const PORT = 9090

// const connectWS = () => {
//   const wss = new WebSocketServer({ port: PORT }, () => console.log(`WebsocketServer is running on port ${PORT}`))

//   let clients: any = []

//   function broadcast(message: any) {
//     const data = JSON.stringify(message)
//     clients.forEach((client: any) => client.send(data))
//   }

//   wss.on('connection', (connection: any) => {
//     clients.push(connection)
//     broadcast({ username: 'admin', message: 'A user has entered the room' })

//     connection.on('message', (message: any) => {
//       console.log(message)
//       const data = JSON.parse(message)
//       broadcast(data)
//     })
//   })

//   function cleanUp() {
//     const clientsLeaving = clients.filter((client: any) => client.readyState === client.CLOSED)
//     clients = clients.filter((client: any) => client.readyState !== client.CLOSED)
//     clientsLeaving.forEach((client: any) => broadcast({ username: 'admin', message: 'A user has left the room' }))
//   }

//   setInterval(cleanUp, 100)
// }

// export default connectWS
