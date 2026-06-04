import React,{useState}from'react';
import{Top}from'./uiBits.jsx';

export default function AiCoach(){
  const[input,setInput]=useState('Chest workout');
  const[messages,setMessages]=useState([{from:'bot',text:'SE7EN FIT coach is ready. Ask for workout, diet, form or recovery help.'}]);
  function send(){
    if(!input.trim())return;
    setMessages([...messages,{from:'me',text:input},{from:'bot',text:'Use a safe warm up, controlled reps, progressive load, enough protein, water, and sleep. Log each set for better progress.'}]);
    setInput('');
  }
  return <main className="content chat">
    <Top title="Virtual trainer." sub="AI COACH"/>
    <div className="msgs">{messages.map((m,i)=><p className={m.from} key={i}>{m.text}</p>)}</div>
    <div className="composer"><input value={input} onChange={e=>setInput(e.target.value)}/><button onClick={send}>Send</button></div>
    <div className="chips"><button onClick={()=>setInput('Fat loss plan')}>Fat loss</button><button onClick={()=>setInput('Veg protein diet')}>Veg protein</button><button onClick={()=>setInput('Chest workout')}>Chest</button></div>
  </main>;
}
