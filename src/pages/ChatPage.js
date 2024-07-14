// src/pages/ChatPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <Sidebar onSelectChat={setSelectedChatId} />
      <div className="chat-window">
        {selectedChatId ? <ChatWindow chatId={selectedChatId} /> : <p>Select a chat</p>}
      </div>
    </div>
  );
};

export default ChatPage;
