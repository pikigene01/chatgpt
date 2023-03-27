import React,{useState} from 'react'

export default function Main({appToView}) {
 const [value,setValue] = useState("");
 const [receivedQuestions,setReceivedQuestions] = useState("");
    const sendPrompt = (e)=>{
        e.preventDefault();
        alert('hey there');

    }
  return (
    <div className='main_app'>

   <div className='client_questons'>
      Main
    </div>     
   <div className='client_answer_inputs'>
    <form onSubmit={sendPrompt}>
    <textarea rows={'5'} placeholder='Type here to answer' onChange={(e)=>setValue(e.target.value)} name='answer' value={value}> 

    </textarea>
    <button type='submit'>Save / Send</button>
    </form>
   </div>
    </div>
  )
}
