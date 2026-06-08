import { mockDb } from '../data/mockData.js';

export function registerWorkoutRoutes(app) {
  app.get('/v1/workouts/library/exercises', (req, res) => {
    const { muscle, machineCategory, level } = req.query;
    let exercises = [...mockDb.exercises];
    if (muscle) exercises = exercises.filter((item) => item.targetMuscle.toLowerCase() === String(muscle).toLowerCase());
    if (machineCategory) exercises = exercises.filter((item) => item.machineCategory === machineCategory);
    if (level) exercises = exercises.filter((item) => item.difficulty === level);
    res.json({ exercises });
  });

  app.post('/v1/workouts/generate', (req, res) => {
    const gymId = req.body.gymId || 'gym_befit';
    const activeMachines = mockDb.machines
      .filter((machine) => machine.gymId === gymId && machine.status === 'active')
      .map((machine) => machine.category);

    const workout = mockDb.exercises
      .filter((exercise) => activeMachines.includes(exercise.machineCategory))
      .slice(0, 5)
      .map((exercise) => ({
        exerciseId: exercise.id,
        name: exercise.name,
        muscle: exercise.targetMuscle,
        sets: exercise.sets,
        reps: exercise.reps,
        machineCategory: exercise.machineCategory
      }));

    res.json({
      title: 'Gym-machine based workout',
      gymId,
      availableMachines: activeMachines,
      workout
    });
  });

  app.post('/v1/workouts/logs', (req, res) => {
    const log = {
      id: `workout_log_${Date.now()}`,
      userId: req.body.userId || 'user_member_1',
      gymId: req.body.gymId || 'gym_befit',
      startedAt: new Date().toISOString(),
      completedAt: null
    };
    res.status(201).json({ log });
  });
}
