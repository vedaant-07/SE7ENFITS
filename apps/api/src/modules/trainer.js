import { mockDb } from '../data/mockData.js';

function allowedQuestion(question) {
  const text = String(question || '').toLowerCase();
  const words = ['workout', 'gym', 'exercise', 'diet', 'food', 'calorie', 'protein', 'recovery', 'machine', 'trainer'];
  return words.some((word) => text.includes(word));
}

export function registerTrainerRoutes(app) {
  app.post('/v1/trainer/ask', (req, res) => {
    if (!allowedQuestion(req.body.question)) {
      return res.status(400).json({ error: 'out_of_scope', message: 'Only gym, workout, food and fitness questions are supported.' });
    }

    const gymId = req.body.gymId || 'gym_befit';
    const activeMachineCategories = mockDb.machines
      .filter((machine) => machine.gymId === gymId && machine.status === 'active')
      .map((machine) => machine.category);

    const workout = mockDb.exercises
      .filter((exercise) => activeMachineCategories.includes(exercise.machineCategory))
      .slice(0, 4);

    res.json({
      answer: 'Here is a workout using active machines available in your linked gym.',
      workout,
      source: 'se7enfits_trainer_placeholder'
    });
  });
}
