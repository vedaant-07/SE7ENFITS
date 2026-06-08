import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Stat, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

const foods = [
  { id: 'poha', name: 'Poha', calories: 280, protein: 8, carbs: 48, fat: 7 },
  { id: 'paneer', name: 'Paneer', calories: 265, protein: 18, carbs: 4, fat: 20 },
  { id: 'eggs', name: 'Eggs', calories: 156, protein: 12, carbs: 1, fat: 10 }
];

export function FoodScreen() {
  const [food, setFood] = useState(foods[0]);
  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>Calories and macros</Label>
    <Title>Food Scan</Title>
    <Muted>Scan food with AI or calculate manually using Indian food database.</Muted>

    <Card style={{ marginTop: 14, marginBottom: 14 }}>
      <Text style={{ color: theme.colors.primary, fontSize: 24, fontWeight: '900' }}>SCAN FOOD</Text>
      <Muted>Upload meal photo. Live AI analysis will use Gemini/OpenAI key from backend.</Muted>
      <PrimaryButton onPress={() => {}}>Upload photo</PrimaryButton>
    </Card>

    <View style={{ flexDirection: 'row', gap: 10, marginBottom: 14 }}>
      {foods.map((item) => <Card key={item.id} style={{ flex: 1, padding: 10 }}><Text onPress={() => setFood(item)} style={{ color: item.id === food.id ? theme.colors.primary : theme.colors.text, fontWeight: '900' }}>{item.name}</Text></Card>)}
    </View>

    <Card>
      <Label>Estimated result</Label>
      <Title>{food.calories} kcal</Title>
      <Muted>{food.name}</Muted>
      <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
        <Stat value={`${food.protein}g`} label="protein" />
        <Stat value={`${food.carbs}g`} label="carbs" />
        <Stat value={`${food.fat}g`} label="fat" />
      </View>
    </Card>
  </ScrollView></Screen>;
}
