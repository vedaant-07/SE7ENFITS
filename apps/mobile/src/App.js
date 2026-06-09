import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { api } from './api/client.js';
import { fallbackMember, memberTabs } from './data/fallback.js';
import { theme } from './theme.js';
import { HomeScreen } from './screens/HomeScreen.js';
import { WorkoutScreen } from './screens/WorkoutScreen.js';
import { FoodScreen } from './screens/FoodScreen.js';
import { TrainerScreen } from './screens/TrainerScreen.js';
import { RewardsScreen } from './screens/RewardsScreen.js';
import { GymScreen } from './screens/GymScreen.js';
import { OnboardingScreen } from './screens/OnboardingScreen.js';

function BottomNav({ tab, setTab }) {
  return <View style={{ position: 'absolute', left: 12, right: 12, bottom: 12, height: 74, borderRadius: 28, backgroundColor: 'rgba(13,13,17,0.96)', borderWidth: 1, borderColor: theme.colors.border, flexDirection: 'row', padding: 7, gap: 4 }}>
    {memberTabs.map((item) => <TouchableOpacity key={item.id} onPress={() => setTab(item.id)} style={{ flex: 1, borderRadius: 19, backgroundColor: tab === item.id ? theme.colors.primary : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: tab === item.id ? '#050505' : theme.colors.muted, fontSize: 9, fontWeight: '900' }}>{item.label}</Text>
    </TouchableOpacity>)}
  </View>;
}

export default function App() {
  const [tab, setTab] = useState('home');
  const [data, setData] = useState(fallbackMember);
  const [onboarded, setOnboarded] = useState(false);

  useEffect(() => {
    api.getMemberBootstrap().then(setData).catch(() => setData(fallbackMember));
  }, []);

  if (!onboarded) {
    return <OnboardingScreen onFinish={() => setOnboarded(true)} />;
  }

  const screens = {
    home: <HomeScreen data={data} go={setTab} />,
    workout: <WorkoutScreen data={data} />,
    food: <FoodScreen data={data} />,
    trainer: <TrainerScreen data={data} />,
    rewards: <RewardsScreen data={data} />,
    gym: <GymScreen data={data} />
  };

  return <View style={{ flex: 1, backgroundColor: theme.colors.background }}>{screens[tab]}<BottomNav tab={tab} setTab={setTab} /></View>;
}
