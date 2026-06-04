const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const state = {
  user: {
    id: 'member_001',
    name: 'Vedant',
    gym: 'SE7EN FIT Club',
    coins: 7450,
    streak: 7,
    caloriesLogged: 1820,
    calorieGoal: 2250,
    setsToday: 12
  },
  shortcuts: ['GYM', 'AI', 'CUT', 'BULK', 'QR'],
  workouts: [
    { id: 'push', title: 'Push Day', subtitle: 'Chest, shoulders, triceps', duration: 42, progress: 76, accent: 'orange' },
    { id: 'pull', title: 'Pull Power', subtitle: 'Back, biceps, rear delts', duration: 48, progress: 58, accent: 'yellow' },
    { id: 'legs', title: 'Leg Engine', subtitle: 'Quads, glutes, calves', duration: 55, progress: 42, accent: 'lime' }
  ],
  exercises: [
    { id: 'bench', name: 'Bench Press', muscle: 'Chest', equipment: 'Barbell', level: 'Beginner', sets: 4, reps: '8-12', rest: 75, tempo: '3-1-1', kcal: 96, steps: ['Lie flat with eyes under bar', 'Grip wider than shoulders', 'Lower to mid chest', 'Press without bouncing'], warnings: ['No bouncing', 'Keep hips stable', 'Control elbows'] },
    { id: 'pulldown', name: 'Lat Pulldown', muscle: 'Back', equipment: 'Cable', level: 'Beginner', sets: 3, reps: '10-12', rest: 60, tempo: '2-1-2', kcal: 82, steps: ['Sit tall', 'Pull elbows to ribs', 'Pause near chest', 'Return slowly'], warnings: ['Avoid swinging', 'Do not pull behind neck', 'Control return'] },
    { id: 'squat', name: 'Barbell Squat', muscle: 'Legs', equipment: 'Barbell', level: 'Intermediate', sets: 4, reps: '6-10', rest: 90, tempo: '3-1-1', kcal: 140, steps: ['Brace core', 'Knees track toes', 'Controlled depth', 'Drive through mid foot'], warnings: ['No knee cave', 'Neutral back', 'Use safe load'] },
    { id: 'press', name: 'Shoulder Press', muscle: 'Shoulders', equipment: 'Dumbbell', level: 'Beginner', sets: 3, reps: '8-12', rest: 60, tempo: '2-1-2', kcal: 74, steps: ['Weights near ears', 'Brace ribs down', 'Press overhead', 'Lower slowly'], warnings: ['Avoid arching', 'Keep neck neutral', 'Move smoothly'] },
    { id: 'curl', name: 'Arm Curl', muscle: 'Arms', equipment: 'Dumbbell', level: 'Beginner', sets: 3, reps: '12-15', rest: 45, tempo: '2-1-2', kcal: 54, steps: ['Elbows close', 'Lift with control', 'Squeeze top', 'Lower fully'], warnings: ['No body swing', 'Elbows steady', 'Full range'] }
  ],
  foods: [
    { id: 'paneer', name: 'Paneer Bowl', kcal: 430, protein: 28, carbs: 32, fat: 18 },
    { id: 'eggs', name: 'Egg Bhurji', kcal: 310, protein: 24, carbs: 8, fat: 20 },
    { id: 'chicken', name: 'Chicken Rice', kcal: 560, protein: 42, carbs: 58, fat: 16 },
    { id: 'poha', name: 'Poha', kcal: 280, protein: 8, carbs: 48, fat: 7 }
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

app.get('/api/health', (_req, res) => res.json({ ok: true, app: 'SE7EN FIT', mode: 'full-stack-starter' }));
app.get('/api/app', (_req, res) => res.json(state));
app.get('/api/exercises', (_req, res) => res.json({ exercises: state.exercises }));
app.get('/api/gym-owner/dashboard', (_req, res) => {
  const revenue = state.payments.reduce((sum, item) => sum + item.amount, 0);
  const commissionDue = state.payments.filter(item => item.status === 'Pending').reduce((sum, item) => sum + item.commission, 0);
  res.json({ revenue, commissionDue, members: state.members, payments: state.payments, referralCode: 'GYM25' });
});
app.post('/api/workouts/log-set', (req, res) => res.status(201).json({ ok: true, exerciseId: req.body.exerciseId, loggedAt: new Date().toISOString() }));
app.post('/api/calories/estimate', (req, res) => {
  const text = String(req.body.label || '').toLowerCase();
  const found = state.foods.find(food => text.includes(food.id) || text.includes(food.name.toLowerCase().split(' ')[0]));
  res.json({ estimate: found || { name: 'Meal estimate', kcal: 420, protein: 22, carbs: 44, fat: 14 } });
});
app.post('/api/trainer/chat', (req, res) => res.json({ reply: `For ${req.body.message || 'training'}, warm up, use controlled reps, log every set, hit protein goal and recover properly.` }));

const distPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

app.listen(PORT, '0.0.0.0', () => console.log(`SE7EN FIT full stack app running on ${PORT}`));
