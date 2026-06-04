import React from 'react';
import{plans}from'./fitData.js';
import{Pill,Heading,Top,Reward}from'./uiBits.jsx';

export default function Rewards(){
  return <main className="content">
    <Top title="Coins, streaks and gym rewards." sub="REWARDS"/>
    <div className="wallet"><div><Pill tone="orange">SE7EN Coins</Pill><h2>7450</h2><p>Earn from workouts, referrals and diet streaks.</p></div><button>Redeem</button></div>
    <Heading left="Reward cards" right="unlock"/>
    <div className="rewardGrid"><Reward title="7 day streak" value="+700"/><Reward title="Gym referral" value="+1500"/><Reward title="Protein goal" value="+300"/><Reward title="Plan upgrade" value="+999"/></div>
    <Heading left="Subscription plans" right="25% owner commission"/>
    {plans.map(p=><div className={`plan ${p.hot?'hot':''}`} key={p.id}><div><Pill tone={p.hot?'orange':'green'}>{p.badge}</Pill><h3>{p.name}</h3><p>{p.price}/month</p></div><small>Gym owner earns {Math.round(p.price*.25)}</small><button>Choose plan</button></div>)}
  </main>;
}
