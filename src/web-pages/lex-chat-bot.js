import React, { useState } from 'react';
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1', // Update with your AWS region
  credentials: new AWS.Credentials(
    {
        accessKeyId: 'ASIAZI2LIZICNLGMQLUG', // Update with your access key ID
        secretAccessKey: 'LWfvUu9hClEujCsuiQhSI7gEmxCWJamvtBNIwvad', // Update with your secret access key
        sessionToken: 'IQoJb3JpZ2luX2VjENL//////////wEaCXVzLXdlc3QtMiJHMEUCIQC9YlN1lRelNyv4WOBLxnrzea5BJWd/bcarGyemnDMU7gIgNwNFPCUBi2n/V89Xx1myfdqsJeVx9LwwOdGjfqTkVCAqsgII+///////////ARAAGgw2Mzc0MjM2MzQ5NDgiDFiN38QBkCwn2ynrQSqGAgoATE5OB2Z+va8Vn8fZVMz4l+hDHtXSwVXkH9OkPaT0yUE5cIsVl8yet2LhfqJ1+6NJe6cq520YiqYD+dCzGDjoTILTFWUatpySN5t1a3VK2dNHHiR/eSMAnpy2Y5B4BufvxDe9hbOjPxm6r0gM7MqInzrYqGbnLVyZ7myroWuvKqXlFsIo5iqy6KzgMlWmUUu5kJ/tqyozw1K4hzsULMuzCQle5XkAaHlyEUn5CTbIjUvnaRDnGwKD+gh5LrhnasLiMIt2fMIIES8gEj/zajqe4UzNTF9ZGMCz/bnS/HnO8uRAXoWiRO3HeMPQnZ7LNwZWXkeI9hpZbiJ57odq4P8IQ3zS5qYwuLzSsAY6nQGp72hWE77/OSB8gLkaV4LnTlqc2ZsyI7Erm2Y7ATYHiJ49iMAtlrnitoCg7yX5RqIL1vlslURZpTjCmEeqCFGrL1tmzT6J2RVrmvYPC00jtv8GsmucFNBspLkM+4lzqLWfQnsY+MQJ9vvHt1GcUYiarHU1RYnwd3ZZk6WV3WVjRjxss5ARNfA3UoxLT0kGh6cwnFJH47qGoxYQp397' // Use the access token as the session token
    }), // Update with your IAM credentials
});

const lexruntime = new AWS.LexRuntime();

const LexChatbot = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const newMessages = [...messages, { content: inputText, sender: 'user' }];
    setMessages(newMessages);
    setInputText('');

    const params = {
      botAlias: 'jobnestchatbot', // Update with your bot alias
      botName: 'JobNestRepo', // Update with your bot name
      inputText: inputText,
      userId: 'USER_ID', // Optional, but you should have some way to uniquely identify users
    };

    try {
      const response = await lexruntime.postText(params).promise();
      const botMessage = response.message;
      const newMessagesWithBot = [...newMessages, { content: botMessage, sender: 'bot' }];
      setMessages(newMessagesWithBot);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'bot' ? 'left' : 'right', margin: '5px' }}>
            <span style={{ backgroundColor: message.sender === 'bot' ? '#f0f0f0' : '#007bff', padding: '5px 10px', borderRadius: '10px', color: message.sender === 'bot' ? '#000' : '#fff' }}>
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={{ width: '100%', padding: '10px', marginTop: '10px' }}
        />
        <button onClick={sendMessage} style={{ marginTop: '10px' }}>Send</button>
      </div>
    </div>
  );
};

export default LexChatbot;