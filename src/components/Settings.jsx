import React,{useContext} from 'react'
import { AppContext } from '../contexts/AppProvider';

export default function Settings() {
  const {user_icon,chatHistory,sendMessage,setInputValue,inputValue,componentToView,setComponentToView} = useContext(AppContext);

  return (
    <div class="tyn-main tyn-main-boxed tyn-main-boxed-lg" id="tynMain">
    {/* start side chat bot */}

    <div class="tyn-chat-body m-4 rounded-3" data-simplebar>
      <div class="tyn-qa">
        <p>Settings</p>
      </div>
    </div>
  </div>
  )
}
