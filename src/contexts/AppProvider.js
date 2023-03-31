import React, { createContext, useState, useEffect } from "react";
import user_icon from "../img/user.png";
import riskcurb_logo from "../img/logo.jpg";
import axios from "axios";
import { OpenAIApi,Configuration } from "openai";
import { apiDataPost, apiDataPostForm } from "../services/apiRepository";
import { apihost, loadApi } from "../services/api";

const AppContext = createContext();
function AppProvider({ children,appToView }) {
  const configuration = new Configuration({
   apiKey:process.env.REACT_APP_OPENAI_API_KEY
  });
  const [inputValue, setInputValue] = useState("");
  const [appOptions, setAppOptions] = useState([]);
  const [combinedDataUser,setCombinedDataUser] = useState("Data: ");
  const [loading,setLoading] = useState(true);
  const [appQuestion, setAppQuestion] = useState("What is your company name?");
  const [chatHistory, setChatHistory] = useState([
    {
      text: appQuestion,
      sender: 'bot'
    }
  ]);
  const [componentToView, setComponentToView] = useState({
    main_app: true,
    settings: false,
    framework: false,
    management: false,
  });
  const [questionAll, setQuestionsAll] = useState(20);
  const [answered, setAnswered] = useState(0);
  const [profileScore, setProfileScore] = useState(0);
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    if (!answered) return () => {};
    setProfileScore((prevData) => {
      let percentage = Math.floor((answered / questionAll) * 100);
      return (prevData = percentage);
    });
 
  }, [answered,profileScore]);

  useEffect(()=>{    
    const getData = async()=>{
     const data = {
      apiData: "geneclient",
      belongs: appToView?.appName
     }
   //grab chathistory, client score, combined data
      let response = await apiDataPostForm(loadApi,data);
      if(response){
        setLoading(false);
      }
      if(response.status == 200){
        console.log(response.profileScore);
        setProfileScore(JSON.parse(response.profileScore));
        setChatHistory(JSON.parse(response.chatHistory));
        setCombinedDataUser(JSON.parse(response.combinedDataUser));
        setAppOptions(JSON.parse(response.appOptions));
        setAppQuestion(JSON.parse(response.appQuestion));
        setAnswered(JSON.parse(response.answered));
      }else if(response.status == 404){
        setLoading(false);

      }else{
        setLoading(false);
      }
    }
    getData();
    
  },[]);

  useEffect(()=>{
    chatHistoryApi();
  },[chatHistory]);

  const chatHistoryApi = async ()=>{
    if(loading) return ()=>{}
    let fetchStatus = "";
    if(chatHistory.length > 0){
      fetchStatus = "update";
    }else{
      fetchStatus = "add";
    }

    const data = {
      status: fetchStatus,
      belongs: appToView?.appName,
      chatHistory: JSON.stringify(chatHistory),
    }
    let response = await apiDataPostForm(loadApi,data);
    // return ()=>{}
    if(response?.status == 200){
      // setChatHistory(JSON.parse(response?.chatHistory));
    }
  }
  useEffect(()=>{
    answeredApi();
  },[answered]);
  const answeredApi = async ()=>{
    if(loading) return ()=>{}
    let fetchStatus = "";
    if(answered !== ""){
      fetchStatus = "update";
    }else{
      fetchStatus = "add";
    }

    const data = {
      status: fetchStatus,
      belongs: appToView?.appName,
      answered: JSON.stringify(answered),
    }
    let response = await apiDataPostForm(loadApi,data);
    // return ()=>{}
    if(response?.status == 200){
      // setAnswered(JSON.parse(response?.answered));
    }
  }
useEffect(()=>{
  profileScoreApi();
},[profileScore]);

  const profileScoreApi = async ()=>{
    if(loading) return ()=>{}

    let fetchStatus = "";
    if(profileScore !== ""){
      fetchStatus = "update";
    }else{
      fetchStatus = "add";
    }

    const data = {
      status: fetchStatus,
      belongs: appToView?.appName,
      profileScore: JSON.stringify(profileScore),
    }
    let response = await apiDataPostForm(loadApi,data);
    if(response?.status == 200){
      // setProfileScore(JSON.parse(response?.profileScore));
    }
  }

  useEffect(()=>{
    addQuestionApi();
  },[appQuestion])
  const addQuestionApi = async ()=>{
      if(loading) return ()=>{}
    let fetchStatus = "";
    if(appQuestion !== ""){
      fetchStatus = "update";
    }else{
      fetchStatus = "add";
    }

    const data = {
      status: fetchStatus,
      belongs: appToView?.appName,
      appQuestion: JSON.stringify(appQuestion),
    }
    let response = await apiDataPostForm(loadApi,data);
    if(response?.status == 200){
      setAppQuestion(JSON.parse(response?.appQuestion));
    }
  }
  useEffect(()=>{
    appOptionsApi();
  },[appOptions]);
  const appOptionsApi = async ()=>{
    if(loading) return ()=>{}

    let fetchStatus = "";
    if(appOptions.length > 0){
      fetchStatus = "update";
    }else{
      fetchStatus = "add";
    }

    const data = {
      status: fetchStatus,
      belongs: appToView?.appName,
      appOptions: JSON.stringify(appOptions),
    }
    let response = await apiDataPostForm(loadApi,data);
    if(response?.status == 200){
      setAppOptions(JSON.parse(response?.appOptions));
    }
  }
  useEffect(()=>{
    combinedDataUserApi();
  },[combinedDataUser]);
  const combinedDataUserApi = async ()=>{
    if(loading) return ()=>{}

    let fetchStatus = "";
    if(appOptions.length > 0){
      fetchStatus = "update";
    }else{
      fetchStatus = "add";
    }

    const data = {
      status: fetchStatus,
      belongs: appToView?.appName,
      combinedDataUser: JSON.stringify(combinedDataUser),
    }
    let response = await apiDataPostForm(loadApi,data);
    if(response?.status == 200){
      // setCombinedDataUser(JSON.parse(response?.combinedDataUser));
    }
  }

  const createFramework = async (e) => {
    if(profileScore < 80){
      alert('you can not create a framework with profile under 80%');
     return ()=>{}
    }

    let combinedData = "";

    chatHistory.map((chat)=>{
      combinedData += ` ${chat.text}`;
    });
    setCombinedDataUser(combinedData);

  }
  const clearChat = async(e) => {
    if(window.confirm('Are you sure you want to clear chat')){
      setInputValue("");
      setAppQuestion("What is your company name?");
      setChatHistory([{
        text: "What is your company name?",
        sender: 'bot'
      }]);
      setAppOptions([]);
      setProfileScore(0);

    }
  }

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
     let response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: inputValue,
      temperature: 0.5,
      max_tokens: 100,
     });
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
    clearChat,
    combinedDataUser,
    appOptions,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
