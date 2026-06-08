import { INDIAN_FOOD_STARTER } from '../../../../packages/shared/src/index.js';

export function registerCalorieRoutes(app) {
  app.get('/v1/foods/search', (req, res) => {
    const query = String(req.query.q || '').toLowerCase();
    const foods = INDIAN_FOOD_STARTER.filter((food) => food.name.toLowerCase().includes(query) || food.id.includes(query));
    res.json({ foods });
  });

  app.post('/v1/calories/manual', (req, res) => {
    const items = Array.isArray(req.body.items) ? req.body.items : [];
    const calculatedItems = items.map((item) => {
      const food = INDIAN_FOOD_STARTER.find((entry) => entry.id === item.foodId);
      const quantity = Number(item.quantity || 1);
      if (!food) return null;
      return {
        foodId: food.id,
        name: food.name,
        quantity,
        calories: Math.round(food.calories * quantity),
        protein: Math.round(food.protein * quantity),
        carbs: Math.round(food.carbs * quantity),
        fat: Math.round(food.fat * quantity)
      };
    }).filter(Boolean);

    const total = calculatedItems.reduce((sum, item) => ({
      calories: sum.calories + item.calories,
      protein: sum.protein + item.protein,
      carbs: sum.carbs + item.carbs,
      fat: sum.fat + item.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

    res.json({ items: calculatedItems, total });
  });

  app.post('/v1/ai/food-scan', (_req, res) => {
    res.json({
      status: 'ai_provider_required',
      message: 'Food scan endpoint is ready. Add GEMINI_API_KEY or OPENAI_API_KEY to enable live image analysis.',
      sample: {
        items: [{ name: 'Poha', quantity: '1 plate', calories: 280 }],
        total: { calories: 280, protein: 8, carbs: 48, fat: 7 },
        confidence: 0.74
      }
    });
  });
}
