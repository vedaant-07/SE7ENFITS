export const mockDb = {
  users: [
    { id: 'user_member_1', email: 'member@se7enfits.com', role: 'member', name: 'Vedant' },
    { id: 'user_owner_1', email: 'owner@befit.com', role: 'gym_owner', name: 'BEFIT Owner' }
  ],
  gyms: [
    {
      id: 'gym_befit',
      ownerUserId: 'user_owner_1',
      name: 'BEFIT Gym',
      code: 'BEFIT',
      city: 'Mumbai',
      status: 'active'
    }
  ],
  machines: [
    { id: 'machine_1', gymId: 'gym_befit', name: 'Dumbbells', category: 'dumbbells', status: 'active' },
    { id: 'machine_2', gymId: 'gym_befit', name: 'Bench Press', category: 'bench_press', status: 'active' },
    { id: 'machine_3', gymId: 'gym_befit', name: 'Lat Pulldown', category: 'lat_pulldown', status: 'active' },
    { id: 'machine_4', gymId: 'gym_befit', name: 'Leg Press', category: 'leg_press', status: 'maintenance' },
    { id: 'machine_5', gymId: 'gym_befit', name: 'Cable Machine', category: 'cable_machine', status: 'active' }
  ],
  exercises: [
    { id: 'ex_bench', name: 'Bench Press', targetMuscle: 'Chest', machineCategory: 'bench_press', difficulty: 'beginner', sets: 4, reps: '8-12' },
    { id: 'ex_lat', name: 'Lat Pulldown', targetMuscle: 'Back', machineCategory: 'lat_pulldown', difficulty: 'beginner', sets: 3, reps: '10-12' },
    { id: 'ex_leg', name: 'Leg Press', targetMuscle: 'Legs', machineCategory: 'leg_press', difficulty: 'intermediate', sets: 4, reps: '10-12' },
    { id: 'ex_cable', name: 'Cable Fly', targetMuscle: 'Chest', machineCategory: 'cable_machine', difficulty: 'beginner', sets: 3, reps: '12-15' },
    { id: 'ex_curl', name: 'Dumbbell Curl', targetMuscle: 'Arms', machineCategory: 'dumbbells', difficulty: 'beginner', sets: 3, reps: '12-15' }
  ],
  subscriptions: [
    { id: 'sub_1', userId: 'user_member_1', gymId: 'gym_befit', plan: 'monthly', amountInr: 150, status: 'active' }
  ],
  payments: [
    { id: 'pay_1', userId: 'user_member_1', gymId: 'gym_befit', amountInr: 150, status: 'successful' }
  ],
  commissions: [
    { id: 'comm_1', gymId: 'gym_befit', ownerUserId: 'user_owner_1', paymentId: 'pay_1', amountInr: 37.5, status: 'pending' }
  ],
  rewards: [
    { userId: 'user_member_1', pointsBalance: 7450, lifetimeEarned: 9000, lifetimeRedeemed: 1550 }
  ]
};
