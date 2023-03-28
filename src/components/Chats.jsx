import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/AppProvider';

export default function Chats() {
    const {user_icon} = useContext(AppContext);
    const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
  // alert(process.env.REACT_APP_OPENAI_API_KEY);
  }, [])

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

  return (
         <div class="tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page" style={{marginTop:"70px"}}>
            <div class="tyn-aside tyn-aside-base">
                <div class="tyn-aside-head">
                    <div class="tyn-aside-head-text">
                        <h3 class="tyn-aside-title tyn-title">RiskCurb Bot</h3>
                        <span class="tyn-subtext">{'number of chats'} </span>
                    </div>
                    <div class="tyn-aside-head-tools">
                        <ul class="tyn-list-inline gap gap-3">
                            <li><Link class="btn btn-icon btn-light btn-md btn-pill" to="/">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                </Link></li>
                        </ul>
                    </div>
                </div>
                <div class="tyn-aside-body" data-simplebar>
                    <ul class="tyn-aside-list">
                        <li class="tyn-aside-item js-toggle-main active">
                            <div class="tyn-media-group">
                                <div class="tyn-media tyn-size-sm">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                    </svg>
                                </div>
                                <div class="tyn-media-col">
                                    <div class="content">Some of the prompts goes here</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="tyn-aside-foot">
                    <div class="w-100">
                        <ul class="row gx-3">
                            <li class="col-6">
                                <Link to="/" class="btn btn-light tyn-size-lg w-100 flex-column py-2 pt-3">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-up" viewBox="0 0 16 16">
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                    </svg>
                                    <span class="small text-nowrap mt-n1">Become Pro</span>
                                </Link>
                            </li>
                            <li class="col-6">
                                <button class="btn btn-light tyn-size-lg w-100 flex-column py-2 pt-3">
                                   
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                    <span class="small text-nowrap mt-n1">Clear Archive</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="tyn-main tyn-main-boxed tyn-main-boxed-lg" id="tynMain">
                {/* start side chat bot */}
                <ul class="tyn-list-inline d-md-none translate-middle-x position-absolute start-50 z-1">
                    <li>
                        <button class="btn btn-icon btn-pill btn-white js-toggle-main">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                    </li>
                </ul>
                <div class="tyn-chat-body m-4 rounded-3" data-simplebar>
                    <div class="tyn-qa">
                        <div class="tyn-qa-item">
                            <div class="tyn-qa-avatar">
                                <div class="tyn-media tyn-size-md">
                                    <img src={user_icon} alt=""/>
                                </div>
                            </div>
                            <div class="tyn-qa-message tyn-text-block"> what can you do for me ? </div>
                        </div>
                        <div class="tyn-qa-item">
                            <div class="tyn-qa-avatar">
                                <div class="tyn-qa-avatar-wrap">
                                    <div class="tyn-media tyn-size-md">
                                        <img src="images/avatar/bot-1.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="tyn-qa-message tyn-text-block">
                                <p>As an AI language model, I can help you in a variety of ways. Here are some examples:</p>
                                <ol>
                                    <li>Answer questions: I can answer your questions about a wide range of topics, including science, history, geography, math, and more.</li>
                                    <li>Provide information: I can provide you with information on a particular topic, such as the definition of a word, the history of an event, or the current status of a situation.</li>
                                    <li>Generate text: I can generate text for you, such as an essay, a report, or a summary of a particular topic.</li>
                                    <li>Help with language: If English is not your first language, I can help you improve your writing or speaking skills by suggesting ways to improve your grammar, syntax, and vocabulary.</li>
                                    <li>Assist with research: If you're working on a research project, I can help you find relevant information and sources to support your work.</li>
                                    <li>Engage in conversation: I can engage in conversation with you on a variety of topics and help you explore different ideas and perspectives.</li>
                                </ol>
                                <p>Overall, my goal is to assist you in any way that I can using my knowledge and abilities as an AI language model.</p>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div class="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
                    <div class="tyn-chat-form-enter">
                        <div class="tyn-chat-form-input" id="tynChatInput" placeholder="text" contenteditable>
      <input placeholder='type here....' style={{width:'100%',background:'none',outline:'none',border:'none'}} type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} />
                            
                        </div>
                        <ul class="tyn-list-inline me-n2 my-1">
                            <li><button class="btn btn-icon btn-white btn-md btn-pill">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                    </svg>
                                </button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}
