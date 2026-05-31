# SE7EN FIT

SE7EN FIT is a startup app for gym members and gym owners.

## Product vision

- Virtual trainer
- Calorie guide and calculator
- Food-photo calorie estimate flow
- Daily workouts
- Weekly workout plan
- Gym-owner referral model
- 25% commission on every referred subscription
- Gym member management
- Payment and commission tracker
- Gym analytics

## Current build

This repo contains a rebuilt starter version of the demo with a dark, bold, youthful, premium UI direction inspired by modern Gen-Z fintech apps without copying FamPay/FamApp assets.

```txt
ironforge/
  frontend/   React + Vite app
  backend/    Express API starter
```

## Run frontend

```bash
cd ironforge/frontend
npm install
npm run dev
```

## Run backend

```bash
cd ironforge/backend
npm install
cp .env.example .env
npm run dev
```

## Backend endpoints

```txt
GET  /api/health
GET  /api/bootstrap
POST /api/auth/demo
GET  /api/plans
POST /api/subscriptions/simulate-checkout
POST /api/calories/estimate
POST /api/trainer/chat
GET  /api/gym-owner/dashboard
```

## Next production work

1. Add real database models for users, gyms, subscriptions, payments, commissions, workouts, diet logs and trainer chats.
2. Add real auth with OTP/email verification.
3. Connect payment provider / Play Billing for subscriptions.
4. Add AI vision calorie endpoint for food photos.
5. Add owner referral QR links and payout workflow.
6. Convert to Expo/React Native when Android APK/AAB build is required.
