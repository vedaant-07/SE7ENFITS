# SE7ENFITS Database Schema

Recommended database: PostgreSQL.

## Auth and users

### users
- id
- google_id
- email
- phone
- role: member, trainer, gym_owner, admin, super_admin
- status: active, suspended, deleted
- created_at
- updated_at

### member_profiles
- id
- user_id
- full_name
- dob
- gender
- height_cm
- weight_kg
- location_city
- location_state
- fitness_goal
- activity_level
- experience_level
- diet_preference
- injury_notes
- created_at
- updated_at

### owner_profiles
- id
- user_id
- full_name
- payout_upi
- payout_bank_last4
- kyc_status
- created_at
- updated_at

## Gyms

### gyms
- id
- owner_user_id
- name
- code
- address
- city
- state
- latitude
- longitude
- status
- description
- created_at
- updated_at

### gym_members
- id
- gym_id
- member_user_id
- join_source: gym_code, qr, admin_added
- membership_status: free, subscribed, expired, suspended
- linked_at
- created_at
- updated_at

### gym_machines
- id
- gym_id
- name
- category
- target_muscles
- status: active, maintenance, out_of_service
- purchase_date
- last_service_date
- next_service_date
- notes
- created_at
- updated_at

### gym_trainers
- id
- gym_id
- user_id
- name
- specialization
- salary_inr
- status
- created_at
- updated_at

### trainer_schedules
- id
- trainer_id
- gym_id
- day_of_week
- start_time
- end_time
- notes

### gym_maintenance_tasks
- id
- gym_id
- machine_id
- title
- priority
- status
- repair_cost_inr
- due_date
- completed_at
- created_at

## Subscriptions, payments, commissions

### subscription_plans
- id
- name
- duration_days
- price_inr
- is_best_value
- is_active

### subscriptions
- id
- user_id
- gym_id
- plan_id
- status: active, cancelled, expired, payment_failed
- started_at
- expires_at
- created_at

### payments
- id
- user_id
- gym_id
- subscription_id
- provider: razorpay, upi, manual
- provider_order_id
- provider_payment_id
- amount_inr
- status: created, successful, failed, refunded
- paid_at
- created_at

### commission_ledger
- id
- gym_id
- owner_user_id
- member_user_id
- payment_id
- subscription_id
- type: percentage, fixed
- rate
- amount_inr
- status: pending, approved, paid, rejected
- payout_reference
- created_at
- paid_at

## Workouts and exercises

### exercises
- id
- name
- target_muscle
- supporting_muscles
- difficulty
- equipment_required
- machine_category
- instructions
- common_mistakes
- safety_tips
- video_url
- animation_url
- is_active

### workout_plans
- id
- user_id
- gym_id
- title
- goal
- level
- source: ai, trainer, template, user_custom
- start_date
- end_date
- created_at

### workout_plan_days
- id
- workout_plan_id
- day_index
- title
- muscle_groups
- notes

### workout_plan_exercises
- id
- workout_plan_day_id
- exercise_id
- sets
- reps
- rest_seconds
- target_weight_kg
- order_index

### workout_logs
- id
- user_id
- gym_id
- workout_plan_id
- workout_plan_day_id
- started_at
- completed_at
- calories_burned
- notes

### workout_set_logs
- id
- workout_log_id
- exercise_id
- set_number
- reps
- weight_kg
- time_under_tension_seconds
- rest_seconds
- completed_at

## Diet and calories

### foods
- id
- name
- serving_label
- calories
- protein_g
- carbs_g
- fat_g
- diet_type
- cuisine
- is_verified

### food_logs
- id
- user_id
- food_id
- meal_type
- quantity
- calories
- protein_g
- carbs_g
- fat_g
- logged_at

### food_scan_logs
- id
- user_id
- image_url
- ai_provider
- detected_items_json
- confidence
- total_calories
- confirmed_by_user
- created_at

## AI

### ai_trainer_chats
- id
- user_id
- gym_id
- question
- answer
- scope_status
- model
- tokens_used
- created_at

### ai_generated_workouts
- id
- user_id
- gym_id
- input_context_json
- generated_plan_json
- model
- created_at

## Challenges, rewards, leaderboards

### challenges
- id
- title
- description
- challenge_type
- target_value
- reward_points
- start_date
- end_date
- status

### challenge_participants
- id
- challenge_id
- user_id
- progress_value
- status: joined, completed, failed, verified
- completed_at

### reward_wallets
- id
- user_id
- points_balance
- lifetime_earned
- lifetime_redeemed

### reward_transactions
- id
- user_id
- points
- type: earn, redeem, adjustment
- source
- reference_id
- status
- created_at

### coupons
- id
- title
- description
- points_required
- coupon_code
- stock
- status

### leaderboard_entries
- id
- scope: gym, city, global
- gym_id
- user_id
- score
- rank
- period

## Admin and security

### audit_logs
- id
- actor_user_id
- action
- entity_type
- entity_id
- metadata_json
- created_at

### notifications
- id
- user_id
- channel: push, email, whatsapp
- title
- body
- status
- sent_at
- created_at
