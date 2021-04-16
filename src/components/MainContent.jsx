import React from 'react'
import '../styles/MainContent.css';
import PostingBoard from './PostingBoard'
import Sidebar from './Sidebar'

function MainContent() {
  return (
    <div className="maincontent-custom-border-box">
      <PostingBoard/>
      <Sidebar/>
    </div>
  )
}

export default MainContent
