import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      const fetchMessages = async () => {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        setMessages(response.data.messages);
      };
      fetchMessages();
    }
  }, [chatId]);

  return (
    <Paper>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText primary={message.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChatWindow;
