import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import styles from './Chat.module.scss'
import socketio from 'socket.io-client'

interface IChatProps {}

const Chat: React.FC<IChatProps> = () => {
  useEffect(() => {
    const socket = socketio()

    socket.on('message', (message: any) => {
      console.log(message)
      socket.emit(message)
    })
  }, [])

  return <div className={styles.Chat}></div>
}

Chat.propTypes = {}

export default Chat
