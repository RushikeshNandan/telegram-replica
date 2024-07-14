// src/components/Message.js
import React from 'react';

const Message = ({ content, sender }) => {
  return (
    <div className="message">
      <strong>{sender}:</strong> {content}
    </div>
  );
};

export default Message;
