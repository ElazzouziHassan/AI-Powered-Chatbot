import React, { useState } from 'react';
import './Chatbot.scss';

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [suggestedPrompts] = useState([
    'How does blockchain technology work?',
    'What are the key differences between Python and JavaScript?',
    'Write a simple code to reverse a string in Python.',
  ]);

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = (message) => {
    // Handle the user message here and send it to the backend
    // Update the chat history with the bot's response
    setChatHistory([...chatHistory, { text: message, sender: 'user' }]);
    setUserMessage(''); // Clear the input field
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <div className="suggested-prompts">
          {suggestedPrompts.map((prompt, index) => (
            <button key={index} onClick={() => handleSendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
        <div className="chat-messages">
          {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : ''}`}>
              {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={handleUserMessageChange}
        />
        <button onClick={() => handleSendMessage(userMessage)}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
