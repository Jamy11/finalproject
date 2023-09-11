import React from 'react'
import {useSocket} from '../../socket/SocketProvider'
const Chat = () => {
  const socket = useSocket();
  console.log(socket)
  return (
    <div>Chat</div>
  )
}

export default Chat