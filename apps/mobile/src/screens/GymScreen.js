import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Label, Muted, Screen, Stat, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

export function GymScreen({ data }) {
  const machines = data.gym?.machines || ['dumbbells', 'bench_press', 'lat_pulldown', 'leg_press', 'cable_machine'];
  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>Linked gym</Label>
    <Title>{data.gym?.name || 'BEFIT Gym'}</Title>
    <Muted>Workouts and AI suggestions use only this gym's available machines.</Muted>
    <View style={{ flexDirection: 'row', gap: 10, marginTop: 14, marginBottom: 14 }}>
      <Stat value={machines.length} label="machines" />
      <Stat value="3" label="trainers" />
      <Stat value="12" label="rank" />
    </View>
    <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '900', marginBottom: 10 }}>Machines</Text>
    {machines.map((machine) => <Card key={machine} style={{ marginBottom: 10 }}><Text style={{ color: theme.colors.text, fontWeight: '900', fontSize: 16 }}>{machine.replaceAll('_', ' ')}</Text><Muted>Available for AI workout generation</Muted></Card>)}
    <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '900', marginBottom: 10, marginTop: 8 }}>Leaderboard</Text>
    {['Aarav', 'Vedant', 'Meera'].map((name, index) => <Card key={name} style={{ marginBottom: 10 }}><Text style={{ color: theme.colors.primary, fontWeight: '900' }}>#{index + 1} {name}</Text><Muted>{9000 - index * 700} points this month</Muted></Card>)}
  </ScrollView></Screen>;
}
