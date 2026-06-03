import React, { useState } from 'react';
import { exercises, exerciseSteps, exerciseWarnings } from './exercises.js';
import { Pill, Ring, Bar, Heading, Top, Metric } from './uiBits.jsx';

function ExercisePlayer({ exercise }) {
  const [logged, setLogged] = useState(0);
  const steps = exerciseSteps[exercise.id] || [];
  const warnings = exerciseWarnings[exercise.id] || [];
  return <section className="exerciseCard">
    <div className="animationStage"><div className="bodyFrame"><i /><span /></div><div className="pulseRing" /></div>
    <div className="exerciseHead"><div><Pill tone="orange">{exercise.muscle}</Pill><h2>{exercise.name}</h2><p>{exercise.equipment} / {exercise.level} / burns {exercise.kcal} kcal</p></div><Ring value={Math.min(100, 25 + logged * 25)} label="sets" /></div>
    <div className="targetGrid"><Metric label="Sets" value={exercise.sets} /><Metric label="Reps" value={exercise.reps} /><Metric label="Rest" value={`${exercise.rest}s`} /><Metric label="Tempo" value={exercise.tempo} /></div>
    <Heading left="Form steps" right="follow slowly" />
    <ol className="steps">{steps.map(step => <li key={step}>{step}</li>)}</ol>
    <Heading left="Avoid mistakes" right="safety" />
    <div className="mistakes">{warnings.map(item => <span key={item}>Alert: {item}</span>)}</div>
    <div className="playerBtns"><button onClick={() => setLogged(n => Math.min(exercise.sets, n + 1))}>Log set {logged}/{exercise.sets}</button><button className="ghost">Start rest</button></div>
  </section>;
}

export default function Guide() {
  const [filter, setFilter] = useState('Chest');
  const [selected, setSelected] = useState(exercises[0]);
  const filtered = exercises.filter(e => filter === 'All' || e.muscle === filter);
  const active = selected || filtered[0] || exercises[0];
  return <main className="content">
    <Top title="Animated workout guide." sub="FORM COACH" />
    <div className="chips">{['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms'].map(x => <button key={x} className={filter === x ? 'on' : ''} onClick={() => { setFilter(x); const next = exercises.find(e => x === 'All' || e.muscle === x); if (next) setSelected(next); }}>{x}</button>)}</div>
    <ExercisePlayer exercise={active} />
    <Heading left="Exercise library" right={`${filtered.length} moves`} />
    {filtered.map(exercise => <button className={`exerciseRow ${active.id === exercise.id ? 'selected' : ''}`} key={exercise.id} onClick={() => setSelected(exercise)}><div className="miniMove"><span /></div><div><b>{exercise.name}</b><small>{exercise.muscle} / {exercise.equipment} / {exercise.level}</small><Bar value={exercise.muscle === 'Chest' ? 84 : exercise.muscle === 'Legs' ? 72 : 64} /></div><em>{exercise.sets}x</em></button>)}
  </main>;
}
