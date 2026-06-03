import React from 'react';
import { Pill, Ring, Heading, Stat, Action, Top } from './uiBits.jsx';

export default function Home({ user, setTab }) {
  return <main className="content">
    <Top title={`Hey ${user.name.split(' ')[0]}, ready?`} sub="SE7EN FIT HOME" />
    <div className="searchHero">
      <div className="searchBar">Search workout, food, trainer, gym</div>
      <div className="avatarStrip">{['GYM', 'AI', 'CUT', 'BULK', 'QR'].map(x => <button key={x}>{x}</button>)}</div>
      <div className="heroCard"><div><Pill>Today plan</Pill><h2>Push day with animated form guide.</h2><p>Chest, shoulders, triceps. 42 min. 2250 kcal target.</p><button onClick={() => setTab('guide')}>Start guided workout</button></div><Ring value={76} label="ready" /></div>
    </div>
    <section className="stats"><Stat icon="F" value="7" label="day streak" /><Stat icon="E" value="1820" label="kcal logged" /><Stat icon="S" value="12" label="sets today" /></section>
    <Heading left="Quick moves" right="tap to open" />
    <div className="actions"><Action icon="W" title="Workout Guide" sub="animated form" onClick={() => setTab('guide')} /><Action icon="C" title="Food Scan" sub="photo calories" onClick={() => setTab('food')} /><Action icon="AI" title="AI Trainer" sub="ask anything" onClick={() => setTab('trainer')} /><Action icon="R" title="Rewards" sub="coins and streak" onClick={() => setTab('rewards')} /></div>
    <Heading left="Weekly split" right="AI adjusted" />
    <div className="week">{['Push', 'Pull', 'Legs', 'Rest', 'Upper', 'Lower', 'Mobility'].map((d, i) => <span className={i === 0 ? 'active' : ''} key={d}><b>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</b>{d}</span>)}</div>
  </main>;
}
