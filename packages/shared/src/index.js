export const USER_ROLES = Object.freeze({
  MEMBER: 'member',
  TRAINER: 'trainer',
  GYM_OWNER: 'gym_owner',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin'
});

export const FITNESS_GOALS = Object.freeze([
  'fat_loss',
  'muscle_gain',
  'strength',
  'endurance',
  'general_fitness'
]);

export const EXPERIENCE_LEVELS = Object.freeze([
  'beginner',
  'intermediate',
  'advanced'
]);

export const SUBSCRIPTION_PLANS = Object.freeze([
  { id: 'monthly', name: 'Monthly', priceInr: 150, durationDays: 30, bestValue: false },
  { id: 'quarterly', name: 'Quarterly', priceInr: 400, durationDays: 90, bestValue: false },
  { id: 'half_yearly', name: 'Half-Yearly', priceInr: 800, durationDays: 180, bestValue: false },
  { id: 'yearly', name: 'Yearly', priceInr: 1500, durationDays: 365, bestValue: true }
]);

export const COMMISSION_RULES = Object.freeze({
  defaultType: 'percentage',
  defaultPercentage: 25,
  supportsFixedAmount: true
});

export const REWARD_RULES = Object.freeze({
  pointsPerRupee: 10,
  rupeesPerPoint: 0.1,
  minimumRedeemPoints: 1000
});

export const AI_SCOPE = Object.freeze({
  allowedTopics: ['workout', 'gym', 'exercise_form', 'nutrition', 'diet', 'recovery', 'gym_business'],
  rejectMessage: 'I can only help with SE7ENFITS gym, workout, nutrition and fitness questions.'
});

export const INDIAN_FOOD_STARTER = Object.freeze([
  { id: 'poha', name: 'Poha', serving: '1 plate', calories: 280, protein: 8, carbs: 48, fat: 7, dietType: 'vegetarian' },
  { id: 'idli', name: 'Idli', serving: '2 pieces', calories: 150, protein: 5, carbs: 30, fat: 1, dietType: 'vegetarian' },
  { id: 'dosa', name: 'Dosa', serving: '1 medium', calories: 220, protein: 6, carbs: 38, fat: 6, dietType: 'vegetarian' },
  { id: 'dal', name: 'Dal', serving: '1 bowl', calories: 180, protein: 10, carbs: 26, fat: 4, dietType: 'vegetarian' },
  { id: 'rice', name: 'Rice', serving: '1 bowl', calories: 205, protein: 4, carbs: 45, fat: 0.5, dietType: 'vegetarian' },
  { id: 'paneer', name: 'Paneer', serving: '100 g', calories: 265, protein: 18, carbs: 4, fat: 20, dietType: 'vegetarian' },
  { id: 'chicken', name: 'Chicken Breast', serving: '100 g', calories: 165, protein: 31, carbs: 0, fat: 4, dietType: 'non_vegetarian' },
  { id: 'eggs', name: 'Eggs', serving: '2 eggs', calories: 156, protein: 12, carbs: 1, fat: 10, dietType: 'non_vegetarian' },
  { id: 'roti', name: 'Roti', serving: '2 pieces', calories: 220, protein: 7, carbs: 44, fat: 2, dietType: 'vegetarian' }
]);

export const MACHINE_CATEGORIES = Object.freeze([
  'treadmill',
  'dumbbells',
  'bench_press',
  'lat_pulldown',
  'cable_machine',
  'leg_press',
  'smith_machine',
  'squat_rack',
  'rowing_machine',
  'cycle'
]);
