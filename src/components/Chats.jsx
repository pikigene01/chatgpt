import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppProvider";
import MainChatApp from "./MainChatApp";
import Settings from "./Settings";
import RiskFrameWork from "./RiskFrameWork";
import RiskManagement from "./RiskManagement";

export default function Chats({ appToView }) {
  const {
    user_icon,
    chatHistory,
    sendMessage,
    setInputValue,
    inputValue,
    componentToView,
    setComponentToView,
    profileScore,
    createFramework,
  } = useContext(AppContext);

  return (
    <div class="tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page">
      <div class="tyn-aside tyn-aside-base" style={{ width: "250px" }}>
        <div class="tyn-aside-head">
          <div
            class="tyn-aside-head-text"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 class="tyn-aside-title tyn-title">RiskCurb</h3>
            <img src={user_icon} style={{ width: "40px" }} alt="" />
            <span class="tyn-subtext">
              {"welcome "}{" "}
              <b style={{ color: "#333" }}>
                {appToView?.appName.toUpperCase()}
              </b>
            </span>
          </div>
          <div class="tyn-aside-head-tools">
            <ul class="tyn-list-inline gap gap-3">
              <li>
                <Link
                  class="btn btn-icon btn-light btn-md btn-pill"
                  to={"/?" + appToView?.url}
                  onClick={()=>createFramework}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="tyn-aside-body" data-simplebar>
          <ul class="tyn-aside-list">
            <li
              class="tyn-aside-item js-toggle-main active"
              onClick={() => setComponentToView({ main_app: true })}
            >
              <div class="tyn-media-group">
                {/* <div class="tyn-media tyn-size-sm">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                    </svg>
                                </div> */}
                <div class="tyn-media-col">
                  <div class="content">App</div>
                </div>
              </div>
            </li>
            <li
              class="tyn-aside-item js-toggle-main"
              onClick={() => setComponentToView({ settings: true })}
            >
              <div class="tyn-media-group">
                <div class="tyn-media-col">
                  <div class="content">Settings</div>
                </div>
              </div>
            </li>
            <li
              class="tyn-aside-item js-toggle-main"
              onClick={() => setComponentToView({ framework: true })}
            >
              <div class="tyn-media-group">
                <div class="tyn-media-col">
                  <div class="content">Risk Framework</div>
                </div>
              </div>
            </li>
            <li
              class="tyn-aside-item js-toggle-main"
              onClick={() => setComponentToView({ management: true })}
            >
              <div class="tyn-media-group">
                <div class="tyn-media-col">
                  <div class="content">Risk Management</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tyn-aside-foot">
          <div class="w-100">
            <ul class="row gx-3">
              <li class="col-6">
                <button class="btn btn-light tyn-size-lg w-100 flex-column py-2 pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  <span class="small text-nowrap mt-n1">Clear History</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* toggling components  */}
      {componentToView?.main_app && <MainChatApp />}
      {componentToView?.main_app && <MainChatApp hide={true} />}
      {componentToView?.settings && <Settings />}
      {componentToView?.framework && <RiskFrameWork />}
      {componentToView?.management && <RiskManagement />}
    </div>
  );
}
