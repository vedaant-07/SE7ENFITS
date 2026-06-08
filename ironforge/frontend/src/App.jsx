import React, { useEffect, useMemo, useState } from 'react';

const fallback = {
  user: { name: 'Vedant', gym: 'SE7EN FIT Club', coins: 7450, streak: 7, caloriesLogged: 1820, calorieGoal: 2250, setsToday: 12, plan: 'Pro Beast' },
  shortcuts: ['GYM', 'AI', 'CUT', 'BULK', 'QR'],
  workouts: [
    { id: 'push', title: 'Push Day', subtitle: 'Chest + shoulders + triceps', duration: 42, progress: 76 },
    { id: 'pull', title: 'Pull Power', subtitle: 'Back + biceps + rear delts', duration: 48, progress: 58 },
    { id: 'legs', title: 'Leg Engine', subtitle: 'Quads + glutes + calves', duration: 55, progress: 42 }
  ],
  exercises: [
    { id: 'bench', name: 'Bench Press', muscle: 'Chest', equipment: 'Barbell', level: 'Beginner', sets: 4, reps: '8-12', rest: 75, tempo: '3-1-1', kcal: 96, steps: ['Set eyes under the bar', 'Grip wider than shoulders', 'Lower to mid chest', 'Press with control'], warnings: ['Do not bounce', 'Keep hips stable', 'Control elbows'] },
    { id: 'pulldown', name: 'Lat Pulldown', muscle: 'Back', equipment: 'Cable', level: 'Beginner', sets: 3, reps: '10-12', rest: 60, tempo: '2-1-2', kcal: 82, steps: ['Sit tall', 'Pull elbows to ribs', 'Pause near chest', 'Return slowly'], warnings: ['Avoid swinging', 'No behind-neck pull', 'Control return'] },
    { id: 'squat', name: 'Barbell Squat', muscle: 'Legs', equipment: 'Barbell', level: 'Intermediate', sets: 4, reps: '6-10', rest: 90, tempo: '3-1-1', kcal: 140, steps: ['Brace core', 'Knees track toes', 'Controlled depth', 'Drive through mid foot'], warnings: ['No knee cave', 'Neutral back', 'Safe load'] },
    { id: 'press', name: 'Shoulder Press', muscle: 'Shoulders', equipment: 'Dumbbell', level: 'Beginner', sets: 3, reps: '8-12', rest: 60, tempo: '2-1-2', kcal: 74, steps: ['Weights near ears', 'Brace ribs down', 'Press overhead', 'Lower slowly'], warnings: ['Avoid arching', 'Neck neutral', 'Move smoothly'] }
  ],
  foods: [
    { id: 'paneer', name: 'Paneer Bowl', kcal: 430, protein: 28, carbs: 32, fat: 18 },
    { id: 'eggs', name: 'Egg Bhurji', kcal: 310, protein: 24, carbs: 8, fat: 20 },
    { id: 'chicken', name: 'Chicken Rice', kcal: 560, protein: 42, carbs: 58, fat: 16 }
  ],
  rewards: [
    { id: 'streak', title: '7 day streak', value: 700 },
    { id: 'referral', title: 'Gym referral', value: 1500 },
    { id: 'protein', title: 'Protein goal', value: 300 },
    { id: 'upgrade', title: 'Plan upgrade', value: 999 }
  ],
  plans: [
    { id: 'starter', name: 'Starter', price: 199, badge: 'Start' },
    { id: 'pro', name: 'Pro Beast', price: 399, badge: 'Popular' },
    { id: 'elite', name: 'Elite', price: 999, badge: 'Elite' }
  ],
  members: [
    { id: 'm1', name: 'Aarav S.', plan: 'Pro Beast', progress: 82, status: 'Active', commission: 100 },
    { id: 'm2', name: 'Meera K.', plan: 'Starter', progress: 64, status: 'Active', commission: 50 },
    { id: 'm3', name: 'Rohan P.', plan: 'Elite', progress: 91, status: 'Expiring', commission: 250 }
  ],
  payments: [
    { id: 'SF-1007', user: 'Aarav S.', amount: 399, commission: 100, status: 'Pending' },
    { id: 'SF-1008', user: 'Meera K.', amount: 199, commission: 50, status: 'Paid' },
    { id: 'SF-1009', user: 'Rohan P.', amount: 999, commission: 250, status: 'Pending' }
  ]
};

function useAppData() {
  const [data, setData] = useState(fallback);
  useEffect(() => {
    fetch('/api/app').then((r) => (r.ok ? r.json() : fallback)).then(setData).catch(() => setData(fallback));
  }, []);
  return data;
}

function Header({ data }) {
  return <header className="topbar"><div><b className="brand">SE7EN<span>FITS</span></b><small>{data.user.gym} • {data.user.plan}</small></div><button className="avatar">{data.user.name[0]}</button></header>;
}

function Stat({ label, value, tone = '' }) { return <div className={`stat ${tone}`}><b>{value}</b><span>{label}</span></div>; }
function Bar({ value }) { return <div className="bar"><i style={{ width: `${Math.min(100, value)}%` }} /></div>; }
function Chip({ children, active, onClick }) { return <button className={active ? 'chip active' : 'chip'} onClick={onClick}>{children}</button>; }

function Home({ data, setTab }) {
  const main = data.workouts[0];
  return <section className="screen"><Header data={data} />
    <div className="search"><span>Search workouts, meals, trainer, gym</span><b>⌕</b></div>
    <div className="shortcutRow">{data.shortcuts.map((x) => <button key={x}><b>{x}</b><span>{x === 'QR' ? 'scan' : 'open'}</span></button>)}</div>
    <div className="heroCard"><div><span className="eyebrow">TODAY WORKOUT</span><h1>{main.title}</h1><p>{main.subtitle} • {main.duration} min • AI adjusted</p><button onClick={() => setTab('guide')}>Start workout</button></div><div className="progressOrb"><b>{main.progress}%</b><span>ready</span></div></div>
    <div className="stats"><Stat label="day streak" value={data.user.streak} /><Stat label="kcal logged" value={data.user.caloriesLogged} /><Stat label="sets today" value={data.user.setsToday} /></div>
    <h3 className="sectionTitle">Quick actions</h3>
    <div className="quickGrid"><button onClick={() => setTab('guide')}><b>Workout Guide</b><span>animated form coach</span></button><button onClick={() => setTab('food')}><b>Food Scan</b><span>calorie + macros</span></button><button onClick={() => setTab('trainer')}><b>AI Trainer</b><span>ask workout / diet</span></button><button onClick={() => setTab('owner')}><b>Gym Owner</b><span>members + commission</span></button></div>
    <h3 className="sectionTitle">Weekly split</h3><div className="weekRow">{['Push', 'Pull', 'Legs', 'Rest', 'Upper', 'Lower', 'Core'].map((x, i) => <span className={i === 0 ? 'on' : ''} key={x}>{x}</span>)}</div>
  </section>;
}

function Guide({ data }) {
  const [filter, setFilter] = useState('Chest');
  const [logged, setLogged] = useState(0);
  const filtered = data.exercises.filter((e) => filter === 'All' || e.muscle === filter);
  const [active, setActive] = useState(data.exercises[0]);
  const current = active || data.exercises[0];
  async function logSet() {
    setLogged((n) => Math.min(current.sets, n + 1));
    fetch('/api/workouts/log-set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ exerciseId: current.id }) }).catch(() => {});
  }
  return <section className="screen"><h2 className="pageTitle">Workout Guide</h2><div className="chips">{['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms'].map((x) => <Chip key={x} active={filter === x} onClick={() => { setFilter(x); const next = data.exercises.find((e) => x === 'All' || e.muscle === x); if (next) setActive(next); }}>{x}</Chip>)}</div>
    <div className="exercisePanel"><div className="motion"><span /><i /><em /></div><span className="eyebrow">{current.muscle} • {current.equipment}</span><h1>{current.name}</h1><p>{current.level} • {current.sets} sets • {current.reps} reps • {current.rest}s rest</p><div className="miniStats"><Stat label="tempo" value={current.tempo} /><Stat label="kcal" value={current.kcal} /><Stat label="logged" value={`${logged}/${current.sets}`} /></div><button className="primary" onClick={logSet}>Log set</button><h3>Form steps</h3>{current.steps.map((s, i) => <p className="step" key={s}>{i + 1}. {s}</p>)}<h3>Common mistakes</h3>{current.warnings.map((w) => <p className="warn" key={w}>{w}</p>)}</div>
    <h3 className="sectionTitle">Exercise library</h3>{filtered.map((e) => <button className="listItem" onClick={() => { setActive(e); setLogged(0); }} key={e.id}><div><b>{e.name}</b><span>{e.muscle} • {e.level}</span><Bar value={e.kcal / 1.4} /></div><em>{e.sets}x</em></button>)}
  </section>;
}

function Food({ data }) {
  const [meal, setMeal] = useState(data.foods[0]);
  const [photo, setPhoto] = useState('');
  return <section className="screen"><h2 className="pageTitle">Calories</h2><label className="scanCard"><input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0]?.name || '')} /><b>{photo ? 'PHOTO READY' : 'SCAN FOOD'}</b><p>Upload a meal photo or choose food manually. Backend endpoint is ready for AI vision integration.</p></label><div className="chips">{data.foods.map((f) => <Chip key={f.id} active={meal.id === f.id} onClick={() => setMeal(f)}>{f.name}</Chip>)}</div><div className="resultCard"><span className="eyebrow">ESTIMATED RESULT</span><h1>{meal.kcal} kcal</h1><p>{meal.name}</p><div className="miniStats"><Stat label="protein" value={`${meal.protein}g`} /><Stat label="carbs" value={`${meal.carbs}g`} /><Stat label="fat" value={`${meal.fat}g`} /></div></div><h3 className="sectionTitle">Daily progress</h3><div className="listItem"><div><b>Calories</b><span>{data.user.caloriesLogged}/{data.user.calorieGoal}</span><Bar value={80} /></div></div></section>;
}

function Trainer() {
  const [msg, setMsg] = useState('Build chest workout');
  const [chat, setChat] = useState([{ role: 'bot', text: 'Ask workouts, diet, form or recovery. I am your SE7EN FIT trainer.' }]);
  async function send() { if (!msg.trim()) return; const userMsg = msg; setMsg(''); const r = await fetch('/api/trainer/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMsg }) }).then((x) => x.json()).catch(() => ({ reply: 'Warm up, lift with control, log sets and recover well.' })); setChat([...chat, { role: 'me', text: userMsg }, { role: 'bot', text: r.reply }]); }
  return <section className="screen"><h2 className="pageTitle">AI Trainer</h2><div className="chatBox">{chat.map((m, i) => <p className={m.role} key={i}>{m.text}</p>)}</div><div className="sendBox"><input value={msg} onChange={(e) => setMsg(e.target.value)} /><button onClick={send}>Send</button></div></section>;
}

function Rewards({ data }) {
  return <section className="screen"><h2 className="pageTitle">Rewards</h2><div className="wallet"><span className="eyebrow">SE7EN COINS</span><h1>{data.user.coins}</h1><p>Earn from workouts, referrals and diet streaks.</p></div><div className="rewardGrid">{data.rewards.map((r) => <div className="reward" key={r.id}><b>+{r.value}</b><span>{r.title}</span></div>)}</div><h3 className="sectionTitle">Plans</h3>{data.plans.map((p) => <div className="listItem" key={p.id}><div><b>{p.name}</b><span>{p.badge} • owner commission {Math.round(p.price * 0.25)}</span></div><em>{p.price}</em></div>)}</section>;
}

function Owner({ data }) {
  const revenue = useMemo(() => data.payments.reduce((s, p) => s + p.amount, 0), [data.payments]);
  const commission = useMemo(() => data.payments.reduce((s, p) => s + p.commission, 0), [data.payments]);
  return <section className="screen"><h2 className="pageTitle">Gym Owner</h2><div className="ownerHero"><div><span className="eyebrow">REFERRAL CODE</span><h1>GYM25</h1><p>Track members, payments, subscription revenue and 25% commission.</p></div><button>QR</button></div><div className="stats two"><Stat label="revenue" value={revenue} /><Stat label="commission" value={commission} /></div><h3 className="sectionTitle">Members</h3>{data.members.map((m) => <div className="listItem" key={m.id}><div><b>{m.name}</b><span>{m.plan} • {m.status}</span><Bar value={m.progress} /></div><em>{m.commission}</em></div>)}<h3 className="sectionTitle">Payments</h3>{data.payments.map((p) => <div className="listItem" key={p.id}><div><b>{p.user}</b><span>{p.id} • {p.status}</span></div><em>{p.commission}</em></div>)}</section>;
}

function Bottom({ tab, setTab }) { return <nav className="bottomNav">{['home', 'guide', 'food', 'trainer', 'rewards', 'owner'].map((x) => <button className={tab === x ? 'on' : ''} key={x} onClick={() => setTab(x)}>{x}</button>)}</nav>; }

export default function App() {
  const data = useAppData();
  const [tab, setTab] = useState('home');
  const pages = { home: <Home data={data} setTab={setTab} />, guide: <Guide data={data} />, food: <Food data={data} />, trainer: <Trainer />, rewards: <Rewards data={data} />, owner: <Owner data={data} /> };
  return <main className="se7enApp">{pages[tab]}<Bottom tab={tab} setTab={setTab} /></main>;
}
