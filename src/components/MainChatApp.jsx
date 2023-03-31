import React, { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

export default function MainChatApp({ hide }) {
  const {
    user_icon,
    chatHistory,
    sendMessage,
    setInputValue,
    inputValue,
    componentToView,
    setComponentToView,
    appQuestion,
    appOptions,
  } = useContext(AppContext);

  return (
    <div class="tyn-main tyn-main-boxed tyn-main-boxed-lg" id="tynMain">
      {/* start side chat bot */}
      <ul class="tyn-list-inline d-md-none translate-middle-x position-absolute start-50 z-1">
        <li>
          <button class="btn btn-icon btn-pill btn-white js-toggle-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </li>
      </ul>
      {hide && (
        <div
          class="tyn-chat-body-side m-4 rounded-3"
          style={{ width: "400px", background: "var(--bs-primary-50)" }}
        >
          <div class="tyn-qa">
            <div
              class="tyn-qa-item-riskcurb"
              style={{ height: "40vh", overflow: "hidden scroll" }}
            >
              <div
                class="tyn-qa-message tyn-text-block"
                style={{ textAlign: "center" }}
              >
                {" "}
                Chat Responses{" "}

              </div>
              {chatHistory.length < 1 && (
                <div style={{height:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <p>No chats response!!</p>
                </div>
              )}
              {chatHistory.map((message, index) => (
                <div class="tyn-qa-item" key={index}>
                  <div class="tyn-qa-avatar">
                    <div class="tyn-qa-avatar-wrap">
                      <div class="tyn-media tyn-size-md">
                        <img
                          src={
                            message.sender == "bot"
                              ? "images/avatar/bot-1.jpg"
                              : user_icon
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="tyn-qa-message tyn-text-block">
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div
              class="tyn-qa-item-riskcurb"
              style={{ height: "30vh", overflow: "hidden scroll" }}
            >
              <div
                class="tyn-qa-message tyn-text-block"
                style={{ textAlign: "center" }}
              >
                {" "}
                Select Options
              </div>
              <ol
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {appOptions.map((data,i)=>{
                  return (
                    <li
                    key={i}
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid #333",
                      margin: "5px 0",
                    }}
                    onClick={(e) => setInputValue(e.target.innerHTML)}
                  >
                    {data}
                  </li>
                  );
                })}
               {appOptions.length < 1 && (
                <li
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  border: "1px solid #333",
                  margin: "5px 0",
                }}
              >
               No Options
              </li>
               )}
              </ol>
            </div>
          </div>
        </div>
      )}

      {!hide && (
        <>
          <div
            class="tyn-chat-body m-4 rounded-3"
            style={{ width: "400px" }}
            data-simplebar
          >
            <div class="tyn-qa">
              <div class="tyn-qa-item">
                <div class="tyn-qa-message tyn-text-block">{appQuestion} </div>
              </div>
              <p>{inputValue}</p>
              {/* <div class="tyn-qa-item">
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
            </div> */}
            </div>
          </div>
          <div class="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
            <div class="tyn-chat-form-enter">
              <div
                class="tyn-chat-form-input"
                id="tynChatInput"
                placeholder="text"
                contenteditable
              >
                <input
                  placeholder="type to answer here...."
                  style={{
                    width: "100%",
                    background: "none",
                    outline: "none",
                    border: "none",
                  }}
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
              </div>
              <ul class="tyn-list-inline me-n2 my-1">
                <li>
                  <button
                    class="btn btn-icon btn-white btn-md btn-pill"
                    onClick={sendMessage}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-send-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
