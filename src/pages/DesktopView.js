import React, { useState } from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import { Grid } from '@mui/material';

const DesktopView = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <Grid container>
      <Grid item xs={4}>
        <ChatList onSelectChat={setSelectedChatId} />
      </Grid>
      <Grid item xs={8}>
        <ChatWindow chatId={selectedChatId} />
      </Grid>
    </Grid>
  );
};

export default DesktopView;
