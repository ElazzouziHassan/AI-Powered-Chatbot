import React, { useState } from 'react';
import './Chatbot.scss';

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [suggestedPrompts] = useState([
    'How does blockchain technology work?',
    'What are the key differences between Python and JavaScript?',
    'Write a simple code to reverse a string in Python.',
    'Write a simple code to create a simple component in React',
    'Is JavaScript better than PHP for backend ?',
    'Laravel or Django ? what framework should I start with ?'
  ]);

  const handleUserMessageChange = (event) => {
    if (event.target.value !== "") return setUserMessage(event.target.value);
  };

  const handleSendMessage = (message) => {
    setChatHistory([...chatHistory, { text: message, sender: 'user' }]);
    setUserMessage(''); 
  };

  return (
    <div className="chatbot-container">
      
    </div>
  );
}

export default Chatbot;
