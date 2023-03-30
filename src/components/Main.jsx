import React,{useState} from 'react'
import Chats from './Chats'

export default function Main({appToView}) {
  return (
    <div className='main_app'>

   <Chats appToView={appToView}/>
    </div>
  )
}
