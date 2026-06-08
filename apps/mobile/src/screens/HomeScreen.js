import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Stat, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

export function HomeScreen({ data, go }) {
  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
      <View><Text style={{ color: theme.colors.text, fontSize: 26, fontWeight: '900', letterSpacing: -2 }}>SE7EN<Text style={{ color: theme.colors.primary }}>FITS</Text></Text><Muted>{data.gym?.name || 'No gym linked'} • {data.user?.plan || 'Free'}</Muted></View>
      <View style={{ width: 44, height: 44, borderRadius: 18, backgroundColor: theme.colors.primary, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#050505', fontWeight: '900' }}>{data.user?.name?.[0] || 'S'}</Text></View>
    </View>

    <Card style={{ marginBottom: 12 }}><Muted>Search workouts, meals, trainer, gym</Muted></Card>

    <View style={{ flexDirection: 'row', gap: 10, marginBottom: 14 }}>
      {['GYM', 'AI', 'CUT', 'BULK', 'QR'].map((item) => <Card key={item} style={{ width: 62, height: 62, padding: 8, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: theme.colors.primary, fontWeight: '900' }}>{item}</Text><Text style={{ color: theme.colors.muted, fontSize: 9 }}>open</Text></Card>)}
    </View>

    <Card style={{ minHeight: 205, marginBottom: 14, justifyContent: 'space-between' }}>
      <Label>Today Workout</Label>
      <Title>{data.today?.workout || 'Push Day'}</Title>
      <Muted>AI adjusted workout based on your linked gym machines.</Muted>
      <PrimaryButton onPress={() => go('workout')}>Start workout</PrimaryButton>
    </Card>

    <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
      <Stat value={data.today?.streak || 0} label="day streak" />
      <Stat value={data.today?.caloriesLogged || 0} label="kcal logged" />
      <Stat value={data.today?.rewardPoints || 0} label="points" />
    </View>

    <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '900', marginBottom: 10 }}>Quick actions</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      {[['workout','Workout Guide'], ['food','Food Scan'], ['trainer','AI Trainer'], ['gym','Gym Section']].map(([id, title]) => <Card key={id} style={{ width: '48%', minHeight: 110 }}><Text style={{ color: theme.colors.text, fontWeight: '900', fontSize: 16 }}>{title}</Text><Muted>Tap to open</Muted><PrimaryButton onPress={() => go(id)}>Open</PrimaryButton></Card>)}
    </View>
  </ScrollView></Screen>;
}
