import React,{useMemo,useState}from'react';
import{foods}from'./fitData.js';
import{Pill,Heading,Top,Metric,Line}from'./uiBits.jsx';

export default function Food(){
  const[meal,setMeal]=useState('Paneer bowl');
  const selected=useMemo(()=>foods.find(f=>f.name===meal)||foods[0],[meal]);
  return <main className="content">
    <Top title="Scan food. Track macros." sub="CALORIE AI"/>
    <div className="upload"><b>SCAN</b><span><strong>Upload food photo</strong><small>Demo card now. Vision endpoint comes next.</small></span></div>
    <div className="chips">{foods.map(f=><button className={meal===f.name?'on':''} key={f.name} onClick={()=>setMeal(f.name)}>{f.name}</button>)}</div>
    <div className="calorie"><Pill>Estimated result</Pill><h2>{selected.kcal} kcal</h2><p>{selected.name}</p><div><Metric label="Protein" value={`${selected.protein}g`}/><Metric label="Carbs" value={`${selected.carbs}g`}/><Metric label="Fat" value={`${selected.fat}g`}/></div></div>
    <Heading left="Today nutrition" right="Goal 2250 kcal"/><Line label="Calories" val="1820" pct={81}/><Line label="Protein" val="124g" pct={80}/><Line label="Water" val="2.6L" pct={74}/>
  </main>;
}
