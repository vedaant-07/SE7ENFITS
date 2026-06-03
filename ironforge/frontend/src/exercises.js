export const exercises = [
  { id: 'bench', name: 'Bench Press', muscle: 'Chest', equipment: 'Barbell', level: 'Beginner', sets: 4, reps: '8-12', rest: 75, tempo: '3-1-1', kcal: 96 },
  { id: 'pulldown', name: 'Lat Pulldown', muscle: 'Back', equipment: 'Cable', level: 'Beginner', sets: 3, reps: '10-12', rest: 60, tempo: '2-1-2', kcal: 82 },
  { id: 'squat', name: 'Barbell Squat', muscle: 'Legs', equipment: 'Barbell', level: 'Intermediate', sets: 4, reps: '6-10', rest: 90, tempo: '3-1-1', kcal: 140 },
  { id: 'press', name: 'Shoulder Press', muscle: 'Shoulders', equipment: 'Dumbbell', level: 'Beginner', sets: 3, reps: '8-12', rest: 60, tempo: '2-1-2', kcal: 74 },
  { id: 'arms', name: 'Arm Curl', muscle: 'Arms', equipment: 'Dumbbell', level: 'Beginner', sets: 3, reps: '12-15', rest: 45, tempo: '2-1-2', kcal: 54 }
];

export const exerciseSteps = {
  bench: ['Lie flat with eyes under the bar.', 'Grip wider than shoulders.', 'Lower to mid chest with control.', 'Press up smoothly.'],
  pulldown: ['Sit tall and lock thighs.', 'Pull elbows toward ribs.', 'Pause near upper chest.', 'Return slowly.'],
  squat: ['Brace core.', 'Knees track toes.', 'Reach controlled depth.', 'Drive through mid foot.'],
  press: ['Dumbbells near ears.', 'Brace ribs down.', 'Press overhead.', 'Lower slowly.'],
  arms: ['Elbows close.', 'Lift with control.', 'Squeeze top.', 'Lower fully.']
};

export const exerciseWarnings = {
  bench: ['Avoid bouncing.', 'Keep hips stable.', 'Control elbow angle.'],
  pulldown: ['Keep chest tall.', 'Avoid swinging.', 'Control the return.'],
  squat: ['Keep knees stable.', 'Keep back neutral.', 'Use safe load.'],
  press: ['Keep ribs down.', 'Move smoothly.', 'Keep neck neutral.'],
  arms: ['Avoid body swing.', 'Keep elbows steady.', 'Use full range.']
};
