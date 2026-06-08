export const fallbackMember = {
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
};

export const memberTabs = [
  { id: 'home', label: 'Home' },
  { id: 'workout', label: 'Workout' },
  { id: 'food', label: 'Food' },
  { id: 'trainer', label: 'AI' },
  { id: 'rewards', label: 'Rewards' },
  { id: 'gym', label: 'Gym' }
];

export const onboardingSteps = [
  'Google login',
  'Profile setup',
  'Fitness goal',
  'Gym code',
  'Subscription'
];
