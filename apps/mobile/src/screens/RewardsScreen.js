import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Stat, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

const challenges = [
  { title: '2 kg weight loss', points: 1000, progress: '60%' },
  { title: '30 day consistency', points: 1500, progress: '23/30' },
  { title: 'Protein streak', points: 500, progress: '5/7' }
];

export function RewardsScreen({ data }) {
  const points = data.today?.rewardPoints || 7450;
  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>10 points = 1 rupee</Label>
    <Title>Rewards</Title>
    <Card style={{ marginTop: 14, marginBottom: 14 }}>
      <Label>SE7EN coins</Label>
      <Title>{points}</Title>
      <Muted>Redeem coupons, gym gadgets and partner offers.</Muted>
      <PrimaryButton onPress={() => {}}>Redeem</PrimaryButton>
    </Card>
    <View style={{ flexDirection: 'row', gap: 10, marginBottom: 14 }}>
      <Stat value={`₹${Math.floor(points / 10)}`} label="redeem value" />
      <Stat value="12" label="rank" />
      <Stat value="7" label="streak" />
    </View>
    <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '900', marginBottom: 10 }}>Challenges</Text>
    {challenges.map((challenge) => <Card key={challenge.title} style={{ marginBottom: 10 }}><Text style={{ color: theme.colors.text, fontWeight: '900', fontSize: 16 }}>{challenge.title}</Text><Muted>{challenge.progress} complete • +{challenge.points} points</Muted></Card>)}
  </ScrollView></Screen>;
}
