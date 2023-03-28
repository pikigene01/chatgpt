import React,{createContext,useState,useEffect} from 'react'
import user_icon from '../img/user.png';
import axios from 'axios';

const AppContext = createContext();
 function AppProvider({children}) {
    const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    // Add user message to chat history
    setChatHistory([...chatHistory, { text: inputValue, sender: 'user' }]);
    // Clear input value
    setInputValue('');

    try {
      // Call OpenAI API to process message
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: inputValue + ' | List of options to choose from', // Customize the prompt with the user's input
        max_tokens: 5,
        n: 1,
        stop: ['|'], // Use a delimiter to signal the end of the list of options
      }, {
        headers: {
          'Authorization': 'Bearer ' + process.env.REACT_APP_OPENAI_API_KEY, // Your API key
          'Content-Type': 'application/json'
        }
      });

      // Parse the response and add to chat history
      const options = response.data.choices[0].text.trim().split('|').map(option => option.trim());
      setChatHistory([...chatHistory, { text: "Here are your options: " + options.join(', '), sender: 'bot' }]);
    } catch (error) {
      // Handle API error
      setChatHistory([...chatHistory, { text: "Oops, something went wrong!", sender: 'bot' }]);
    }
  };
    const values = {
  user_icon,chatHistory,sendMessage,setInputValue,inputValue,setInputValue
    }
  return (
    <AppContext.Provider value={values}>
    {children}
    </AppContext.Provider>
  )
}

export {AppContext,AppProvider};