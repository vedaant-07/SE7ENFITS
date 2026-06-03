import React from 'react';

export function Brand(){return <div className="brand"><span>SE7EN</span><b>FIT</b></div>}
export function Pill({children,tone='yellow'}){return <span className={`pill ${tone}`}>{children}</span>}
export function Ring({value,label='goal'}){return <div className="ring"><b>{value}%</b><small>{label}</small></div>}
export function Bar({value}){return <div className="bar"><i style={{width:`${value}%`}} /></div>}
export function Heading({left,right}){return <div className="heading"><h3>{left}</h3><small>{right}</small></div>}
export function Top({title,sub}){return <header className="top"><div><small>{sub}</small><h1>{title}</h1></div><div className="avatar">7F</div></header>}
export function Stat({icon,value,label}){return <div className="stat"><span>{icon}</span><b>{value}</b><small>{label}</small></div>}
export function Action({icon,title,sub,onClick}){return <button className="action" onClick={onClick}><span>{icon}</span><b>{title}</b><small>{sub}</small></button>}
export function Metric({label,value}){return <span className="metric"><b>{value}</b><small>{label}</small></span>}
export function Line({label,val,pct}){return <div className="line"><div><b>{label}</b><span>{val}</span></div><Bar value={pct}/></div>}
export function Reward({title,value}){return <div className="reward"><b>{value}</b><span>{title}</span></div>}
