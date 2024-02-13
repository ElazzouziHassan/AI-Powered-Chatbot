import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './Chatbot.scss';
import Logo from "../../assets/logo.png"

function Chatbot() {
  
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [suggestedPrompts] = useState([
    'How does blockchain technology work?',
    'What are the key differences between Python and JavaScript?',
    'Write a simple code to reverse a string in Python.',
    'Write a simple code to create a simple component in React',
    'Is JavaScript better than PHP for backend ?',
    'Is JavaScript better than PHP for backend ?',
    'Is JavaScript better than PHP for backend ?',
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
      <div className="left">
        <div className="logo">
          <img src={Logo} alt="AI-Powered-Chatbot" />
        </div>
        <div className="suggested-prompts">
          {suggestedPrompts.map((prompt, index) => (
            <button key={index} onClick={() => handleSendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
      <div className="right">
        <div className="chatbot">
          <div className="chat-messages">
            {chatHistory.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : ''}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="actions">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={handleUserMessageChange}
            />
            <button onClick={() => handleSendMessage(userMessage)}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
