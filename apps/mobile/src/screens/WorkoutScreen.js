import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Stat, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

const fallbackWorkout = [
  { name: 'Bench Press', muscle: 'Chest', sets: 4, reps: '8-12', machineCategory: 'bench_press' },
  { name: 'Lat Pulldown', muscle: 'Back', sets: 3, reps: '10-12', machineCategory: 'lat_pulldown' },
  { name: 'Cable Fly', muscle: 'Chest', sets: 3, reps: '12-15', machineCategory: 'cable_machine' }
];

export function WorkoutScreen({ data }) {
  const [active, setActive] = useState(fallbackWorkout[0]);
  const [logged, setLogged] = useState(0);
  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>Gym-machine based plan</Label>
    <Title>Workout Guide</Title>
    <Muted>Workouts are generated only from machines available in {data.gym?.name || 'your gym'}.</Muted>

    <Card style={{ marginTop: 14, marginBottom: 14 }}>
      <View style={{ height: 210, borderRadius: 28, backgroundColor: '#292932', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <View style={{ width: 130, height: 130, borderRadius: 65, borderWidth: 10, borderColor: theme.colors.primary }} />
        <View style={{ width: 120, height: 8, borderRadius: 10, backgroundColor: theme.colors.primaryWarm, position: 'absolute' }} />
      </View>
      <Label>{active.muscle} • {active.machineCategory}</Label>
      <Title>{active.name}</Title>
      <Muted>{active.sets} sets • {active.reps} reps • controlled tempo</Muted>
      <View style={{ flexDirection: 'row', gap: 10, marginVertical: 12 }}>
        <Stat value={active.sets} label="sets" />
        <Stat value={active.reps} label="reps" />
        <Stat value={logged} label="logged" />
      </View>
      <PrimaryButton onPress={() => setLogged((value) => Math.min(active.sets, value + 1))}>Log set</PrimaryButton>
    </Card>

    <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '900', marginBottom: 10 }}>Exercise library</Text>
    {fallbackWorkout.map((exercise) => <Card key={exercise.name} style={{ marginBottom: 10 }}>
      <Text onPress={() => { setActive(exercise); setLogged(0); }} style={{ color: theme.colors.text, fontSize: 16, fontWeight: '900' }}>{exercise.name}</Text>
      <Muted>{exercise.muscle} • {exercise.sets} sets • {exercise.reps}</Muted>
    </Card>)}
  </ScrollView></Screen>;
}
