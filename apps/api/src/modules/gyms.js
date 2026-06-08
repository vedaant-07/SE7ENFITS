import { mockDb } from '../data/mockData.js';

export function registerGymRoutes(app) {
  app.get('/v1/gyms/code/:code', (req, res) => {
    const gym = mockDb.gyms.find((item) => item.code.toLowerCase() === req.params.code.toLowerCase());
    if (!gym) return res.status(404).json({ error: 'gym_not_found' });
    const machines = mockDb.machines.filter((machine) => machine.gymId === gym.id);
    res.json({ gym, machines });
  });

  app.get('/v1/gyms/:gymId/machines', (req, res) => {
    const machines = mockDb.machines.filter((machine) => machine.gymId === req.params.gymId);
    res.json({ machines });
  });

  app.post('/v1/gyms/:gymId/machines', (req, res) => {
    const machine = {
      id: `machine_${Date.now()}`,
      gymId: req.params.gymId,
      name: req.body.name,
      category: req.body.category,
      status: req.body.status || 'active'
    };
    mockDb.machines.push(machine);
    res.status(201).json({ machine });
  });
}
