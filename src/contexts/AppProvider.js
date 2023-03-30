import React, { createContext, useState, useEffect } from "react";
import user_icon from "../img/user.png";
import riskcurb_logo from "../img/logo.jpg";
import axios from "axios";

const AppContext = createContext();
function AppProvider({ children }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [appOptions, setAppOptions] = useState([]);
  const [appQuestion, setAppQuestion] = useState("");
  const [componentToView, setComponentToView] = useState({
    main_app: true,
    settings: false,
    framework: false,
    management: false,
  });
  const [questionAll, setQuestionsAll] = useState(20);
  const [answered, setAnswered] = useState(0);
  const [profileScore, setProfileScore] = useState(0);

  useEffect(() => {
    if (!answered) return () => {};
    setProfileScore((prevData) => {
      let percentage = Math.floor((answered / questionAll) * 100);
      return (prevData = percentage);
    });
  }, [answered]);

  const sendMessage = async () => {
    // Add user message to chat history
    setChatHistory((prevData) => {
      return [...prevData, { text: inputValue, sender: "user" }];
    });
    // Clear input value
    setInputValue("");
    setAnswered((prevData) => {
      return (prevData += 1);
    });

    try {
      // Call OpenAI API to process message
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: inputValue + " | List of options to choose from", // Customize the prompt with the user's input
          max_tokens: 5,
          n: 1,
          stop: ["|"], // Use a delimiter to signal the end of the list of options
        },
        {
          headers: {
            Authorization: "Bearer org-Flwe5v0e8363WItinv2AZw3t", // Your API key
            "Content-Type": "application/json",
          },
        }
      );
      // + process.env.REACT_APP_OPENAI_API_KEY
      // Parse the response and add to chat history
      const options = response.data.choices[0].text
        .trim()
        .split("|")
        .map((option) => option.trim());
      setChatHistory((prevData) => {
        return [
          ...prevData,
          {
            text: "Here are your options: " + options.join(", "),
            sender: "bot",
          },
        ];
      });
    } catch (error) {
      // Handle API error
      setChatHistory((prevData) => {
        return [
          ...prevData,
          { text: "Oops, something went wrong!", sender: "bot" },
        ];
      });
    }
  };
  const createFramework = async () => {
    alert('you want to create framework');
  }
  const values = {
    user_icon,
    chatHistory,
    sendMessage,
    setInputValue,
    inputValue,
    setInputValue,
    componentToView,
    setComponentToView,
    profileScore,
    riskcurb_logo,
    appOptions,
    appQuestion,
    createFramework,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
