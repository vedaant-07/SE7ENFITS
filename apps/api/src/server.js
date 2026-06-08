import express from 'express';
import cors from 'cors';
import { mockDb } from './data/mockData.js';
import { registerGymRoutes } from './modules/gyms.js';
import { registerWorkoutRoutes } from './modules/workouts.js';
import { registerCalorieRoutes } from './modules/calories.js';
import { registerTrainerRoutes } from './modules/trainer.js';

const app = express();
const PORT = Number(process.env.PORT || 7000);

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => {
  res.json({ ok: true, app: 'SE7ENFITS API', version: '0.2.0' });
});

app.get('/v1/bootstrap/member', (_req, res) => {
  const user = mockDb.users.find((item) => item.role === 'member');
  const gym = mockDb.gyms.find((item) => item.code === 'BEFIT');
  const machines = mockDb.machines.filter((machine) => machine.gymId === gym.id);
  const subscription = mockDb.subscriptions.find((item) => item.userId === user.id);
  const rewards = mockDb.rewards.find((item) => item.userId === user.id);
  res.json({
    user,
    gym,
    machines,
    subscription,
    rewards,
    today: {
      workout: 'Push Day',
      streak: 7,
      caloriesLogged: 1820,
      rewardPoints: rewards?.pointsBalance || 0
    }
  });
});

app.get('/v1/bootstrap/owner', (_req, res) => {
  const gym = mockDb.gyms.find((item) => item.code === 'BEFIT');
  const payments = mockDb.payments.filter((item) => item.gymId === gym.id);
  const commissions = mockDb.commissions.filter((item) => item.gymId === gym.id);
  res.json({
    gym,
    metrics: {
      totalMembers: 124,
      activeMembers: 91,
      expiringSoon: 12,
      monthlyRevenue: payments.reduce((sum, item) => sum + item.amountInr, 0),
      commissionPending: commissions.filter((item) => item.status === 'pending').reduce((sum, item) => sum + item.amountInr, 0)
    },
    machines: mockDb.machines.filter((machine) => machine.gymId === gym.id),
    payments,
    commissions
  });
});

registerGymRoutes(app);
registerWorkoutRoutes(app);
registerCalorieRoutes(app);
registerTrainerRoutes(app);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`SE7ENFITS API running on ${PORT}`);
});
