import React,{useState}from'react';
import Home from './Home.jsx';
import Guide from './Guide.jsx';
import Food from './Food.jsx';
import Trainer from './Trainer.jsx';
import Rewards from './Rewards.jsx';
import {Top,Stat,Heading,Bar,Pill} from './uiBits.jsx';
import {members,payments} from './fitData.js';

function Nav({tab,setTab}){return <nav>{[['home','H','Home'],['guide','G','Guide'],['food','F','Food'],['trainer','AI','AI'],['rewards','R','Rewards']].map(([id,ic,l])=><button className={tab===id?'on':''} key={id} onClick={()=>setTab(id)}><span>{ic}</span><small>{l}</small></button>)}</nav>}

function Shell({children,tab,setTab,setRole}){return <main className="app"><section className="phone"><div className="status"><b>9:41</b><span>5G BAT</span></div><div className="roleSwitch"><button onClick={()=>setRole('member')}>Member</button><button onClick={()=>setRole('owner')}>Owner</button><button onClick={()=>setRole('admin')}>Admin</button></div>{children}{tab&&<Nav tab={tab} setTab={setTab}/>}</section></main>}

function OwnerPanel({admin=false}){const revenue=payments.reduce((s,p)=>s+p.amount,0);const commission=payments.reduce((s,p)=>s+p.commission,0);return <main className="content"><Top title={admin?'Platform control room.':'Gym owner dashboard.'} sub={admin?'ADMIN HQ':'GYM OWNER'}/><div className="ownerHero"><div><Pill>25 percent commission</Pill><h2>{admin?'Manage gyms, payouts and subscriptions.':'Promote SE7EN FIT to gym members.'}</h2><p>Referral code, QR, member progress and payout ledger.</p></div><div className="qr"><b>GYM25</b><small>QR link</small></div></div><div className="stats two"><Stat icon="INR" value={admin?'2.8L':revenue} label={admin?'monthly revenue':'subscription revenue'}/><Stat icon="COM" value={admin?'70k':commission} label={admin?'commission due':'commission earned'}/></div><Heading left={admin?'Gyms and payouts':'Gym members'} right="live"/>{members.map(m=><div className="memberRow" key={m.name}><span>{m.name.slice(0,2).toUpperCase()}</span><div><b>{m.name}</b><small>{m.plan} / {m.status}</small><Bar value={m.progress}/></div><Pill tone={m.status==='Expiring'?'pink':'green'}>{m.due}</Pill></div>)}<Heading left="Payment tracker" right="ledger"/>{payments.map(p=><div className="pay" key={p.id}><div><b>{p.user}</b><small>{p.id} / {p.status}</small></div><b>{p.amount}</b><em>{p.commission}</em></div>)}</main>}

export default function App(){const[role,setRole]=useState('member');const[tab,setTab]=useState('home');const user={name:'Vedant'};if(role==='owner')return <Shell setRole={setRole}><OwnerPanel/></Shell>;if(role==='admin')return <Shell setRole={setRole}><OwnerPanel admin/></Shell>;const screens={home:<Home user={user} setTab={setTab}/>,guide:<Guide/>,food:<Food/>,trainer:<Trainer/>,rewards:<Rewards/>};return <Shell tab={tab} setTab={setTab} setRole={setRole}>{screens[tab]}</Shell>}
