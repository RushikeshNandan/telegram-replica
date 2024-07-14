// src/components/Sidebar.js
import React from 'react';
import ChatList from './ChatList';

const Sidebar = ({ onSelectChat }) => {
  return (
    <div className="sidebar">
      <ChatList onSelectChat={onSelectChat} />
    </div>
  );
};

export default Sidebar;
