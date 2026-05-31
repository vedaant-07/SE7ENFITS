import React, { useMemo, useState } from 'react';

const plans = [
  { id: 'starter', name: 'Starter', price: 199, perks: ['Daily workout', 'Basic calories', 'Gym streaks'] },
  { id: 'pro', name: 'Pro Beast', price: 399, perks: ['Virtual trainer', 'Food photo calories', 'Weekly plan'], popular: true },
  { id: 'elite', name: 'Elite', price: 999, perks: ['Priority trainer', 'Owner analytics', 'Progress report'] }
];

const workouts = [
  { name: 'Push Strength', meta: 'Chest • Shoulder • Triceps', mins: 42, progress: 78 },
  { name: 'Leg Engine', meta: 'Quads • Glutes • Calves', mins: 50, progress: 58 },
  { name: 'Core Burn', meta: 'Abs • Conditioning', mins: 18, progress: 91 }
];

const foods = [
  { name: 'Paneer bowl', kcal: 430, protein: 28 },
  { name: 'Egg bhurji', kcal: 310, protein: 24 },
  { name: 'Chicken rice', kcal: 560, protein: 42 },
  { name: 'Poha', kcal: 280, protein: 8 }
];

const members = [
  { name: 'Aarav S.', plan: 'Pro Beast', progress: 82, status: 'Active' },
  { name: 'Meera K.', plan: 'Starter', progress: 64, status: 'Active' },
  { name: 'Rohan P.', plan: 'Elite', progress: 91, status: 'Expiring' },
  { name: 'Vedant S.', plan: 'Pro Beast', progress: 76, status: 'Active' }
];

const payments = [
  { id: 'SF-1007', user: 'Aarav S.', amount: 399, commission: 100, status: 'Pending' },
  { id: 'SF-1008', user: 'Meera K.', amount: 199, commission: 50, status: 'Paid' },
  { id: 'SF-1009', user: 'Rohan P.', amount: 999, commission: 250, status: 'Pending' }
];

function Brand() {
  return <div className="brand"><span>SE7EN</span><b>FIT</b></div>;
}

function Pill({ children, tone = '' }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

function Ring({ value }) {
  return <div className="ring" style={{ '--p': `${value * 3.6}deg` }}><b>{value}%</b><span>goal</span></div>;
}

function Bar({ value }) {
  return <div className="bar"><i style={{ width: `${value}%` }} /></div>;
}

function Login({ onEnter }) {
  const [role, setRole] = useState('member');
  return (
    <section className="login">
      <div className="glow" />
      <div className="loginCard">
        <Brand />
        <h1>Fitness app for the next generation of gym members.</h1>
        <p>Virtual trainer, calories, food photo estimates, daily workouts, weekly plans, gym CRM, analytics and 25% owner commission.</p>
        <div className="roles">
          {['member', 'owner', 'admin'].map(r => <button key={r} onClick={() => setRole(r)} className={role === r ? 'on' : ''}>{r}</button>)}
        </div>
        <div className="demoBox"><span>Demo login</span><b>{role}@se7enfit.com</b><small>Password: demo1234</small></div>
        <button className="cta" onClick={() => onEnter(role)}>Launch {role} app</button>
      </div>
    </section>
  );
}

function MemberApp({ user, logout }) {
  const [tab, setTab] = useState('home');
  const screens = {
    home: <Home user={user} setTab={setTab} />,
    train: <Train />,
    food: <Food />,
    ai: <Trainer />,
    plan: <Plans />
  };
  return <Shell logout={logout}>{screens[tab]}<Nav tab={tab} setTab={setTab} /></Shell>;
}

function Home({ user, setTab }) {
  return <main className="content"><Top title={`Ready, ${user.name.split(' ')[0]}?`} sub="Today, 31 May" />
    <div className="hero"><div><Pill tone="yellow">Pro Beast Active</Pill><h2>Your AI coach planned a push day.</h2><p>42 min • chest, shoulders, triceps • calorie target 2,250 kcal</p><button onClick={() => setTab('train')}>Start workout</button></div><Ring value={76} /></div>
    <div className="stats"><Card icon="🔥" value="7" label="day streak"/><Card icon="⚡" value="1,820" label="kcal eaten"/><Card icon="💪" value="12" label="sets today"/></div>
    <Heading left="Quick actions" right="Tap to open" />
    <div className="actions"><Action icon="🤖" title="Virtual Trainer" sub="Ask anything" onClick={() => setTab('ai')} /><Action icon="📸" title="Food Photo" sub="Estimate kcal" onClick={() => setTab('food')} /><Action icon="🗓️" title="Weekly Plan" sub="Auto split" onClick={() => setTab('plan')} /><Action icon="📊" title="Progress" sub="Body + gym" /></div>
    <Heading left="Weekly split" right="AI adjusted" />
    <div className="week">{['Push','Pull','Legs','Rest','Upper','Lower','Mobility'].map((d,i)=><span className={i===0?'active':''} key={d}><b>{['M','T','W','T','F','S','S'][i]}</b>{d}</span>)}</div>
  </main>;
}

function Train() {
  return <main className="content"><Top title="Daily workouts built for real gym floors." sub="Workout OS" />
    <div className="note">⚡ Progressive overload, clean form, and weekly consistency.</div>
    {workouts.map(w => <div className="workout" key={w.name}><div><Pill tone="green">{w.mins} min</Pill><h3>{w.name}</h3><p>{w.meta}</p></div><button>Start</button><Bar value={w.progress}/></div>)}
  </main>;
}

function Food() {
  const [meal, setMeal] = useState('Paneer bowl');
  const [photo, setPhoto] = useState('');
  const selected = useMemo(() => foods.find(f => f.name === meal) || foods[0], [meal]);
  return <main className="content"><Top title="Click food or upload photo to estimate calories." sub="Calorie AI" />
    <label className="upload"><input type="file" accept="image/*" onChange={e => setPhoto(URL.createObjectURL(e.target.files?.[0]))}/>{photo ? <img src={photo} alt="meal"/> : <b>📸</b>}<span><strong>Upload food photo</strong><small>Demo preview now. AI vision endpoint comes next.</small></span></label>
    <div className="chips">{foods.map(f => <button className={meal===f.name?'on':''} key={f.name} onClick={() => setMeal(f.name)}>{f.name}</button>)}</div>
    <div className="calorie"><Pill tone="yellow">Estimated</Pill><h2>{selected.kcal} kcal</h2><p>{selected.name} • {selected.protein}g protein</p><div><span><b>{selected.protein}g</b>Protein</span><span><b>{Math.round(selected.kcal*.11)}g</b>Fat</span><span><b>{Math.round(selected.kcal*.13)}g</b>Carbs</span></div></div>
    <Heading left="Today nutrition" right="Goal 2,250 kcal" /><Line label="Calories" val="1820" pct={81}/><Line label="Protein" val="124g" pct={80}/><Line label="Water" val="2.6L" pct={74}/>
  </main>;
}

function Trainer() {
  const [messages, setMessages] = useState([{ from: 'bot', text: 'I am your SE7EN FIT virtual trainer. Ask about workouts, diet, form or recovery.' }]);
  const [input, setInput] = useState('Build muscle with gym workouts');
  function send() { if (!input.trim()) return; setMessages([...messages, { from: 'me', text: input }, { from: 'bot', text: 'Keep today focused: 4 compound lifts, 2 isolation moves, protein target 1.6–2.2g/kg, and 7–9 hours sleep.' }]); setInput(''); }
  return <main className="content chat"><Top title="AI coach for workouts, form, diet and recovery." sub="Virtual Trainer" />
    <div className="msgs">{messages.map((m,i)=><p className={m.from} key={i}>{m.text}</p>)}</div>
    <div className="composer"><input value={input} onChange={e=>setInput(e.target.value)} /><button onClick={send}>Send</button></div>
    <div className="chips"><button onClick={()=>setInput('Fat loss plan')}>Fat loss</button><button onClick={()=>setInput('Veg protein diet')}>Veg protein</button><button onClick={()=>setInput('Chest workout')}>Chest</button></div>
  </main>;
}

function Plans() {
  return <main className="content"><Top title="Simple subscriptions with owner commission." sub="Plans" />{plans.map(p => <div className={`plan ${p.popular?'hot':''}`} key={p.id}><div><Pill tone={p.popular?'yellow':'green'}>{p.popular?'Most popular':'Plan'}</Pill><h3>{p.name}</h3><p>₹{p.price}</p></div><ul>{p.perks.map(x=><li key={x}>✓ {x}</li>)}</ul><small>Gym owner commission: ₹{Math.round(p.price*.25)}</small><button>Choose plan</button></div>)}</main>;
}

function OwnerApp({ logout, admin = false }) {
  const revenue = payments.reduce((s,p)=>s+p.amount,0);
  const commission = payments.reduce((s,p)=>s+p.commission,0);
  return <Shell logout={logout}><main className="content"><Top title={admin ? 'Manage gyms, subscriptions and payouts.' : 'Gym owner dashboard'} sub={admin ? 'Admin HQ' : 'Iron Paradise Gym'} />
    <div className="hero ownerHero"><div><Pill tone="yellow">25% Commission</Pill><h2>{admin ? 'Platform operating system.' : 'Advertise SE7EN FIT to your members.'}</h2><p>Referral code tracks every subscription, commission and payout.</p></div><div className="qr"><b>GYM25</b><small>QR code</small></div></div>
    <div className="stats two"><Card icon="₹" value={admin?'2.8L':revenue} label={admin?'monthly revenue':'subscription revenue'}/><Card icon="🤝" value={`₹${admin?'70k':commission}`} label={admin?'commission due':'commission earned'}/></div>
    <Heading left={admin?'Pending payouts':'Gym members'} right="Live" />
    {members.map(m => <div className="row" key={m.name}><span>{m.name.slice(0,2).toUpperCase()}</span><div><b>{m.name}</b><small>{m.plan} • {m.status}</small><Bar value={m.progress}/></div><Pill tone={m.status==='Expiring'?'pink':'green'}>{m.status}</Pill></div>)}
    <Heading left="Payment tracker" right="25% ledger" />
    {payments.map(p => <div className="pay" key={p.id}><div><b>{p.user}</b><small>{p.id} • {p.status}</small></div><b>₹{p.amount}</b><em>₹{p.commission}</em></div>)}
  </main></Shell>;
}

function Shell({ children, logout }) { return <main className="app"><section className="phone"><div className="status"><b>9:41</b><span>5G ▰▰ 🔋</span></div><button className="logout" onClick={logout}>Logout</button>{children}</section></main>; }
function Top({ title, sub }) { return <header className="top"><div><small>{sub}</small><h1>{title}</h1></div><div className="avatar">SF</div></header>; }
function Heading({ left, right }) { return <div className="heading"><h3>{left}</h3><small>{right}</small></div>; }
function Card({ icon, value, label }) { return <div className="card"><span>{icon}</span><b>{value}</b><small>{label}</small></div>; }
function Action({ icon, title, sub, onClick }) { return <button className="action" onClick={onClick}><span>{icon}</span><b>{title}</b><small>{sub}</small></button>; }
function Line({ label, val, pct }) { return <div className="line"><div><b>{label}</b><span>{val}</span></div><Bar value={pct}/></div>; }
function Nav({ tab, setTab }) { return <nav>{[['home','⌂','Home'],['train','▣','Train'],['food','◉','Food'],['ai','✦','AI'],['plan','₹','Plan']].map(([id,ic,l])=><button className={tab===id?'on':''} key={id} onClick={()=>setTab(id)}><span>{ic}</span><small>{l}</small></button>)}</nav>; }

export default function App() {
  const [user, setUser] = useState(null);
  if (!user) return <main className="app"><section className="phone"><div className="status"><b>9:41</b><span>5G ▰▰ 🔋</span></div><Login onEnter={role => setUser({ role, name: role === 'admin' ? 'SE7EN Admin' : role === 'owner' ? 'Seven Gym Owner' : 'Vedant Satdive' })}/></section></main>;
  if (user.role === 'owner') return <OwnerApp logout={() => setUser(null)} />;
  if (user.role === 'admin') return <OwnerApp admin logout={() => setUser(null)} />;
  return <MemberApp user={user} logout={() => setUser(null)} />;
}
