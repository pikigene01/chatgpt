import React,{useState} from 'react'
import ChatBot from './ChatBot'
import Chats from './Chats'

export default function Main({appToView}) {
  return (
    <div className='main_app'>

   <Chats/>
    </div>
  )
}
