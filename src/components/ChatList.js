// src/components/ChatList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1')
      .then(response => setChats(response.data.chats))
      .catch(error => console.error('Error fetching chats:', error));
  }, []);

  return (
    <List>
      {chats.map(chat => (
        <ListItem button key={chat.id} onClick={() => onSelectChat(chat.id)}>
          <ListItemText primary={chat.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
