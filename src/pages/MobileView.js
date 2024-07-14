import React, { useState } from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import { Box, Button } from '@mui/material';

const MobileView = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <Box>
      {selectedChatId ? (
        <>
          <Button onClick={() => setSelectedChatId(null)}>Back</Button>
          <ChatWindow chatId={selectedChatId} />
        </>
      ) : (
        <ChatList onSelectChat={setSelectedChatId} />
      )}
    </Box>
  );
};

export default MobileView;
