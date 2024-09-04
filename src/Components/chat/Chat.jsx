import './chat.css'
import EmojiBeaker from 'emoji-picker-react'
import React, { useState, useRef, useEffect } from 'react'



function Chat() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const endOfMessagesRef = useRef(null)



  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])


  const hangleEmoji = (e) => {
    setMessage((prev) => prev + e.emoji)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <span>Jamal Google</span>
            <p>Lorem, ipsum dolor here.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message other">
          <img src="./avatar.png" alt="" />
          <div className='message-info'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sunt.</p>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className='message-info'>
            <p>Lorem ipsum dolor sit amet consectetur hello adipisicing elit. Mollitia, sunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message other">
          <img src="./avatar.png" alt="" />
          <div className='message-info'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sunt.</p>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className='message-info'>
            <p>Lorem ipsum dolor sit amet consectetur hello adipisicing elit. Mollitia, sunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message other">
          <img src="./avatar.png" alt="" />
          <div className='message-info'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sunt.</p>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className='message-info'>
            <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur hello adipisicing elit. Mollitia, sunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className='message-info' ref={endOfMessagesRef} />
        </div>
        
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder='Type a message...'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
          <EmojiBeaker className='EmojiBeaks' open={open} onEmojiClick={hangleEmoji} />
        </div>
        <button className='sendBtn'>Send <img src="./send.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Chat;