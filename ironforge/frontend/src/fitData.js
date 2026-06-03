export const plans = [
  { id: 'starter', name: 'Starter', price: 199, badge: 'Start' },
  { id: 'pro', name: 'Pro Beast', price: 399, badge: 'Popular', hot: true },
  { id: 'elite', name: 'Elite', price: 999, badge: 'Elite' }
];

export const foods = [
  { name: 'Paneer bowl', kcal: 430, protein: 28, carbs: 32, fat: 18 },
  { name: 'Egg bhurji', kcal: 310, protein: 24, carbs: 8, fat: 20 },
  { name: 'Chicken rice', kcal: 560, protein: 42, carbs: 58, fat: 16 },
  { name: 'Poha', kcal: 280, protein: 8, carbs: 48, fat: 7 }
];

export const members = [
  { name: 'Aarav S.', plan: 'Pro Beast', progress: 82, status: 'Active', due: '100' },
  { name: 'Meera K.', plan: 'Starter', progress: 64, status: 'Active', due: '50' },
  { name: 'Rohan P.', plan: 'Elite', progress: 91, status: 'Expiring', due: '250' },
  { name: 'Vedant S.', plan: 'Pro Beast', progress: 76, status: 'Active', due: '100' }
];

export const payments = [
  { id: 'SF-1007', user: 'Aarav S.', amount: 399, commission: 100, status: 'Pending' },
  { id: 'SF-1008', user: 'Meera K.', amount: 199, commission: 50, status: 'Paid' },
  { id: 'SF-1009', user: 'Rohan P.', amount: 999, commission: 250, status: 'Pending' }
];
