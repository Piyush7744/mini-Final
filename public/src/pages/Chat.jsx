import React from 'react'
import './Chat.css'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Logo from "../assets/logo.svg";

function Chat() {
  return (
    <div className='chat-container'>
      <Navbar />
      <div className="content">
      <h1 className='main-text'>Smart Board using Hand Gesture Recognition</h1>
      <p className='mainn-text'> Unleash your creativity in the digital realm with Smart Board, a cutting-edge project that transforms hand gestures into strokes of digital art.</p>
      <button className='start-button'>Start</button>
      <img className='brand-logo-img' src={Logo} alt="logo" />
      </div>
      <Footer />
    </div>

  )
}

export default Chat
