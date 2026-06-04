import React,{useState}from'react';
import{Top}from'./uiBits.jsx';

export default function Trainer(){
  const[input,setInput]=useState('Chest workout');
  const[messages,setMessages]=useState([{from:'bot',text:'I am your SE7EN FIT coach. Ask workouts, diet, form or recovery.'}]);
  function send(){if(!input.trim())return;setMessages([...messages,{from:'me',text:input},{from:'bot',text:'Warm up first. Use compound lifts, add isolation work, track protein, sleep well, and log every set.'}]);setInput('')}
  return <main className="content chat"><Top title="Virtual trainer." sub="AI COACH"/><div className="msgs">{messages.map((m,i)=><p className={m.from} key={i}>{m.text}</p>)}</div><div className="composer"><input value={input} onChange={e=>setInput(e.target.value)}/><button onClick={send}>Send</button></div><div className="chips"><button onClick={()=>setInput('Fat loss plan')}>Fat loss</button><button onClick={()=>setInput('Veg protein diet')}>Veg protein</button><button onClick={()=>setInput('Chest workout')}>Chest</button></div></main>;
}
