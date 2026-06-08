import express from 'express';
import cors from 'cors';

const app = express();
const PORT = Number(process.env.PORT || 7000);

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const state = {
  users: [],
  gyms: [],
  machines: [],
  subscriptions: [],
  commissions: [],
  workouts: [],
  foodLogs: [],
  rewards: []
};

app.get('/health', (_req, res) => {
  res.json({ ok: true, app: 'SE7ENFITS API', version: '0.1.0' });
});

app.get('/v1/bootstrap/member', (_req, res) => {
  res.json({
    user: {
      id: 'member_demo',
      name: 'Vedant',
      plan: 'Pro Beast',
      linkedGymCode: 'BEFIT'
    },
    gym: {
      code: 'BEFIT',
      name: 'BEFIT Gym',
      machines: ['dumbbells', 'bench_press', 'lat_pulldown', 'leg_press', 'cable_machine']
    },
    today: {
      workout: 'Push Day',
      streak: 7,
      caloriesLogged: 1820,
      rewardPoints: 7450
    }
  });
});

app.get('/v1/bootstrap/owner', (_req, res) => {
  res.json({
    gym: { code: 'BEFIT', name: 'BEFIT Gym' },
    metrics: {
      totalMembers: 124,
      activeMembers: 91,
      expiringSoon: 12,
      monthlyRevenue: 54800,
      commissionPending: 13700
    }
  });
});

app.post('/v1/ai/trainer', (req, res) => {
  const question = String(req.body.question || '').toLowerCase();
  const allowed = ['workout', 'gym', 'exercise', 'diet', 'nutrition', 'recovery', 'machine', 'calorie'].some((word) => question.includes(word));
  if (!allowed) {
    return res.status(400).json({
      error: 'out_of_scope',
      message: 'I can only help with SE7ENFITS gym, workout, nutrition and fitness questions.'
    });
  }
  res.json({
    answer: 'Use your linked gym machines, warm up first, train with controlled reps, log every set, and recover properly.',
    source: 'placeholder_ai_guardrail'
  });
});

app.post('/v1/calories/manual', (req, res) => {
  const quantity = Number(req.body.quantity || 1);
  const calories = Number(req.body.caloriesPerServing || 250) * quantity;
  res.json({ calories, quantity });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`SE7ENFITS API running on ${PORT}`);
});
