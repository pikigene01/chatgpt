import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppProvider";

export default function Header({ appToView }) {
  const { user_icon,profileScore,riskcurb_logo } = useContext(AppContext);

  return (
    <div>
      <nav className="tyn-appbar">
        <div className="tyn-appbar-wrap">
          <div className="tyn-appbar-logo">
            <Link className="tyn-logo" to={"/?" + appToView?.url}>
              {/* <svg
                viewBox="0 0 43 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.2654 14.793C37.2654 14.793 45.0771 20.3653 41.9525 29.5311C41.9525 29.5311 41.3796 31.1976 39.0361 34.4264L42.4732 37.9677C42.4732 37.9677 43.3065 39.478 41.5879 39.9987H24.9229C24.9229 39.9987 19.611 40.155 14.8198 36.9782C14.8198 36.9782 12.1638 35.2076 9.76825 31.9787L18.6215 32.0308C18.6215 32.0308 24.298 31.9787 29.7662 28.3333C35.2344 24.6878 37.4217 18.6988 37.2654 14.793Z"
                  fill="#60A5FA"
                />
                <path
                  d="M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z"
                  fill="#2563EB"
                />
              </svg> */}
              <img src={riskcurb_logo} alt="logo" />
            </Link>
          </div>
          <div className="tyn-appbar-content">
            <ul className="tyn-appbar-nav tyn-appbar-nav-start">
              <li className="tyn-appbar-item">
                <Link className="tyn-appbar-link" to={"/?" + appToView?.url}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-text-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                  </svg>
                  <span className="d-none">Chats</span>
                </Link>
              </li>
            </ul>
            <ul className="tyn-appbar-nav tyn-appbar-nav-end">
              <li className="tyn-appbar-item">
                <a
                  className="tyn-appbar-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  data-bs-offset="0,10"
                  data-bs-auto-close="outside"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-app-indicator"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  <span className="d-none">Notifications</span>
                </a>
                <div className="dropdown-menu dropdown-menu-rg dropdown-menu-end">
                  <div className="dropdown-head">
                    <div className="title">
                      <h6>Notifications</h6>
                    </div>
                    <ul className="nav nav-tabs nav-tabs-line">
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#notifications-unread"
                          type="button"
                        >
                          {" "}
                          Unread{" "}
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#notifications-all"
                          type="button"
                        >
                          {" "}
                          All{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-gap">
                    <ul className="tyn-media-list gap gap-3">
                      <li>
                        <div className="tyn-media-group">
                          <div className="tyn-media tyn-circle">
                            <img src={user_icon} alt="" />
                          </div>
                          <div className="tyn-media-col">
                            <div className="tyn-media-row">
                              <span className="message">
                                <strong>RiskCurb</strong> chat
                              </span>
                            </div>
                            <div className="tyn-media-row has-dot-sap">
                              <span className="meta">time</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="tyn-appbar-item">
                <a
                  className="d-inline-flex dropdown-toggle"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                  href="#"
                  data-bs-offset="0,10"
                >
                  <div className="tyn-media tyn-size-lg tyn-circle">
                    <img src={user_icon} alt="" />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="dropdown-gap">
                    <div className="tyn-media-group">
                      <div className="tyn-media tyn-size-lg">
                        <img src={user_icon} alt="" />
                      </div>
                      <div className="tyn-media-col">
                        <div className="tyn-media-row">
                          <h6 className="name">RiskCurb ChatBot</h6>
                          <div className="indicator varified">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-check-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                          </div>
                        </div>
                        <div className="tyn-media-row has-dot-sap">
                          <p className="content">ok</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
        className="percentage"
        style={{
          width: "100%",
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25px",
          backgroundColor: "blue",
          zIndex: "777",
          display: "block",
          color:"#fff",
          textAlign:"center"
        }}
      >
        <p>Profile Score: {profileScore + " %"} </p>
      </div>
      </nav>
       <div style={{marginTop: "90px",}}>

       </div>
    </div>
  );
}
