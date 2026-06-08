const API_BASE_URL = 'http://localhost:7000';

async function request(path, options = {}) {
  const response = await fetch(API_BASE_URL + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || data.error || 'Request failed');
  return data;
}

export const api = {
  getMemberBootstrap: () => request('/v1/bootstrap/member'),
  getGymByCode: (code) => request('/v1/gyms/code/' + encodeURIComponent(code)),
  generateWorkout: (payload) => request('/v1/workouts/generate', { method: 'POST', body: JSON.stringify(payload) }),
  searchFoods: (query) => request('/v1/foods/search?q=' + encodeURIComponent(query)),
  calculateCalories: (items) => request('/v1/calories/manual', { method: 'POST', body: JSON.stringify({ items }) }),
  askTrainer: (payload) => request('/v1/trainer/ask', { method: 'POST', body: JSON.stringify(payload) })
};
