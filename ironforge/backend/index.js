const express = require('express');
const cors = require('cors');

const app = express();
const PORT = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json({ limit: '8mb' }));

const plans = [
  { id: 'starter', name: 'Starter', price: 199, commissionRate: 0.25, features: ['Daily workout', 'Basic calorie guide', 'Gym streaks'] },
  { id: 'pro', name: 'Pro Beast', price: 399, commissionRate: 0.25, features: ['Virtual trainer', 'Food photo calories', 'Weekly workout plan'] },
  { id: 'elite', name: 'Elite', price: 999, commissionRate: 0.25, features: ['Priority trainer', 'Owner analytics', 'Advanced progress report'] }
];

const gym = {
  id: 'gym_001',
  name: 'Iron Paradise Gym',
  ownerName: 'Demo Gym Owner',
  referralCode: 'GYM25',
  commissionRate: 0.25
};

const members = [
  { id: 'u_001', name: 'Aarav S.', plan: 'Pro Beast', status: 'Active', progress: 82 },
  { id: 'u_002', name: 'Meera K.', plan: 'Starter', status: 'Active', progress: 64 },
  { id: 'u_003', name: 'Rohan P.', plan: 'Elite', status: 'Expiring', progress: 91 },
  { id: 'u_004', name: 'Vedant S.', plan: 'Pro Beast', status: 'Active', progress: 76 }
];

const payments = [
  { id: 'pay_1007', userName: 'Aarav S.', planId: 'pro', amount: 399, commissionAmount: 100, status: 'pending' },
  { id: 'pay_1008', userName: 'Meera K.', planId: 'starter', amount: 199, commissionAmount: 50, status: 'paid' },
  { id: 'pay_1009', userName: 'Rohan P.', planId: 'elite', amount: 999, commissionAmount: 250, status: 'pending' }
];

function getPlan(planId) {
  return plans.find((plan) => plan.id === planId) || plans[1];
}

function commissionFor(amount) {
  return Math.round(amount * gym.commissionRate);
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, app: 'SE7EN FIT API', version: '0.1.0' });
});

app.get('/api/bootstrap', (_req, res) => {
  res.json({ gym, plans, members, payments });
});

app.post('/api/auth/demo', (req, res) => {
  const role = ['member', 'owner', 'admin'].includes(req.body?.role) ? req.body.role : 'member';
  res.json({
    token: `demo-token-${role}`,
    user: {
      id: `demo_${role}`,
      name: role === 'owner' ? 'Seven Gym Owner' : role === 'admin' ? 'SE7EN Admin' : 'Vedant Satdive',
      role
    }
  });
});

app.get('/api/plans', (_req, res) => {
  res.json({ plans });
});

app.post('/api/subscriptions/simulate-checkout', (req, res) => {
  const plan = getPlan(req.body?.planId);
  const memberName = req.body?.memberName || 'Demo Member';
  const payment = {
    id: `pay_${Date.now()}`,
    userName: memberName,
    planId: plan.id,
    amount: plan.price,
    commissionAmount: commissionFor(plan.price),
    referralCode: req.body?.referralCode || gym.referralCode,
    status: 'pending'
  };
  payments.unshift(payment);
  res.status(201).json({ payment, message: 'Demo subscription recorded with 25% gym owner commission.' });
});

app.post('/api/calories/estimate', (req, res) => {
  const label = String(req.body?.label || 'meal').toLowerCase();
  const presets = {
    paneer: { calories: 430, protein: 28, carbs: 32, fat: 18 },
    egg: { calories: 310, protein: 24, carbs: 8, fat: 20 },
    chicken: { calories: 560, protein: 42, carbs: 58, fat: 16 },
    poha: { calories: 280, protein: 8, carbs: 48, fat: 7 }
  };
  const match = Object.keys(presets).find((key) => label.includes(key));
  res.json({ label, estimate: presets[match] || { calories: 420, protein: 22, carbs: 45, fat: 14 }, source: 'demo-rules' });
});

app.post('/api/trainer/chat', (req, res) => {
  const message = req.body?.message || 'workout plan';
  res.json({
    reply: `For ${message}, follow a focused plan: warm up, use progressive overload, keep protein high, track sleep, and log every set in SE7EN FIT.`
  });
});

app.get('/api/gym-owner/dashboard', (_req, res) => {
  const revenue = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const commissionDue = payments.filter((p) => p.status === 'pending').reduce((sum, payment) => sum + payment.commissionAmount, 0);
  res.json({ gym, revenue, commissionDue, members, payments });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`SE7EN FIT API running on port ${PORT}`);
});
