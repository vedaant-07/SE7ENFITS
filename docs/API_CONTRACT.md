# SE7ENFITS API Contract

Base path: `/v1`

## Auth

### POST /auth/google
Login or register using Google identity token.

Request:
```json
{
  "idToken": "google_id_token",
  "role": "member"
}
```

Response:
```json
{
  "token": "jwt",
  "user": { "id": "user_1", "email": "user@example.com", "role": "member" },
  "requiresOnboarding": true
}
```

## Member

### POST /members/onboarding
Create or update member profile.

Request:
```json
{
  "fullName": "Vedant",
  "dob": "2002-01-01",
  "gender": "male",
  "heightCm": 175,
  "weightKg": 72,
  "locationCity": "Mumbai",
  "fitnessGoal": "muscle_gain",
  "activityLevel": "moderate",
  "experienceLevel": "beginner",
  "dietPreference": "non_vegetarian",
  "injuryNotes": "none"
}
```

### GET /members/me/dashboard
Returns member home dashboard data.

Response:
```json
{
  "profile": {},
  "linkedGym": {},
  "subscription": {},
  "todayWorkout": {},
  "streak": 7,
  "rewardPoints": 7450,
  "leaderboardRank": 12
}
```

### POST /members/link-gym
Link member to gym using gym code.

Request:
```json
{ "gymCode": "BEFIT" }
```

## Gyms

### POST /gyms
Create gym profile by owner.

### GET /gyms/:gymId
Get gym details.

### GET /gyms/code/:code
Get public gym details by code.

### GET /gyms/:gymId/machines
Get machines available in a gym.

### POST /gyms/:gymId/machines
Owner adds machine.

### PATCH /gyms/:gymId/machines/:machineId
Owner updates machine status.

## Workouts

### GET /workouts/library/exercises
Exercise library with filters.

Query:
```txt
muscle=Chest&level=beginner&machineCategory=bench_press
```

### POST /workouts/generate
Generate machine-based workout for member.

Request:
```json
{
  "goal": "muscle_gain",
  "level": "beginner",
  "gymId": "gym_1",
  "availableMachines": ["dumbbells", "bench_press", "lat_pulldown"]
}
```

### POST /workouts/logs
Create workout log.

### POST /workouts/logs/:logId/sets
Log exercise set.

## Calories and nutrition

### GET /foods/search?q=poha
Search Indian food database.

### POST /calories/manual
Manual calorie calculation.

Request:
```json
{
  "items": [
    { "foodId": "poha", "quantity": 1 },
    { "foodId": "eggs", "quantity": 2 }
  ]
}
```

### POST /ai/food-scan
Upload image and estimate food items.

Response:
```json
{
  "items": [
    { "name": "poha", "quantity": "1 plate", "calories": 280 }
  ],
  "total": { "calories": 280, "protein": 8, "carbs": 48, "fat": 7 },
  "confidence": 0.74
}
```

## AI Trainer

### POST /ai/trainer
Ask fitness-only AI trainer.

Request:
```json
{
  "question": "Give me chest workout using my gym machines",
  "context": {
    "goal": "muscle_gain",
    "level": "beginner",
    "gymId": "gym_1"
  }
}
```

Response:
```json
{
  "answer": "Today use bench press, dumbbell press and cable fly.",
  "workout": [],
  "safetyNote": "Stop if you feel pain."
}
```

## Subscriptions and payments

### GET /subscriptions/plans
Returns active subscription plans.

### POST /payments/razorpay/order
Create payment order.

### POST /payments/razorpay/verify
Verify successful payment.

### GET /members/me/subscription
Get member subscription status.

## Commission

### GET /owner/commissions
Owner commission ledger.

### GET /owner/payouts
Owner payout history.

## Owner dashboard

### GET /owner/dashboard
KPI metrics.

### GET /owner/members
List gym members.

### GET /owner/trainers
List trainers.

### POST /owner/trainers
Add trainer.

### GET /owner/maintenance
List maintenance tasks.

### POST /owner/maintenance
Create maintenance task.

## Challenges and rewards

### GET /challenges
List active challenges.

### POST /challenges/:id/join
Join challenge.

### POST /challenges/:id/progress
Update progress.

### GET /rewards/wallet
Get reward wallet.

### GET /rewards/coupons
List redeemable coupons.

### POST /rewards/redeem
Redeem points.

## Admin

### GET /admin/dashboard
Admin KPIs.

### GET /admin/users
All users.

### GET /admin/gyms
All gyms.

### GET /admin/payments
All payments.

### GET /admin/commissions
All commissions.

### PATCH /admin/commissions/:id/status
Approve, reject or mark paid.

### POST /admin/challenges
Create challenge.

### POST /admin/coupons
Create coupon.
