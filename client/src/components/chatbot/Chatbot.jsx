import React, { useState } from 'react';
import Message from '../message/Message';

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const message = { text: userMessage, sender: 'user' };
    setChatHistory([...chatHistory, message]);
    // Send the user message to the backend and receive the bot's response
    // Update the chatHistory state with the bot's response
    setUserMessage(''); // Clear the input field
  };

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {chatHistory.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={userMessage}
        onChange={handleUserMessageChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
