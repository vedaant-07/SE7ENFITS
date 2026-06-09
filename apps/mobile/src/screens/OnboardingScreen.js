import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

export function OnboardingScreen({ onFinish }) {
  const [profile, setProfile] = useState({
    fullName: 'Vedant',
    dob: '2002-01-01',
    location: 'Mumbai',
    goal: 'muscle_gain',
    experience: 'beginner',
    gymCode: 'BEFIT'
  });

  function update(key, value) {
    setProfile((current) => ({ ...current, [key]: value }));
  }

  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>Google login required</Label>
    <Title>Setup your fitness profile</Title>
    <Muted>SE7ENFITS uses your profile, goal and gym code to personalize workouts and rewards.</Muted>
    <Card style={{ marginTop: 16 }}>
      {[
        ['fullName', 'Full name'],
        ['dob', 'DOB'],
        ['location', 'Location'],
        ['goal', 'Fitness goal'],
        ['experience', 'Experience level'],
        ['gymCode', 'Gym code']
      ].map(([key, label]) => <View key={key} style={{ marginBottom: 12 }}>
        <Text style={{ color: theme.colors.muted, marginBottom: 6 }}>{label}</Text>
        <TextInput value={profile[key]} onChangeText={(value) => update(key, value)} style={{ color: theme.colors.text, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 16, padding: 12 }} />
      </View>)}
      <PrimaryButton onPress={() => onFinish(profile)}>Continue</PrimaryButton>
    </Card>
  </ScrollView></Screen>;
}
