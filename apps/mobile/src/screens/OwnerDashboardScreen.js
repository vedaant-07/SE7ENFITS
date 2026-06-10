import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Stat, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

const members = [
  { name: 'Aarav', status: 'Free', plan: 'Invite' },
  { name: 'Vedant', status: 'Active', plan: 'Premium' },
  { name: 'Meera', status: 'Active', plan: 'Pro' }
];

export function OwnerDashboardScreen({ go }) {
  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>Owner mode</Label>
    <Title>BEFIT Dashboard</Title>
    <Muted>Manage members, machines, trainers, revenue and commissions from the app.</Muted>

    <View style={{ flexDirection: 'row', gap: 10, marginTop: 14, marginBottom: 14 }}>
      <Stat value="124" label="members" />
      <Stat value="91" label="active" />
      <Stat value="₹13.7k" label="commission" />
    </View>

    <Card style={{ marginBottom: 14 }}>
      <Label>Gym Code</Label>
      <Title>BEFIT</Title>
      <Muted>Share this code with gym members so their workouts match your gym machines.</Muted>
      <PrimaryButton onPress={() => go('ownerInvite')}>Add member</PrimaryButton>
    </Card>

    <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '900', marginBottom: 10 }}>Members</Text>
    {members.map((member) => <Card key={member.name} style={{ marginBottom: 10 }}>
      <Text style={{ color: theme.colors.text, fontWeight: '900', fontSize: 16 }}>{member.name}</Text>
      <Muted>{member.status} • {member.plan}</Muted>
    </Card>)}

    <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '900', marginBottom: 10, marginTop: 8 }}>Management</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      {['Machines', 'Trainers', 'Maintenance', 'Revenue'].map((item) => <Card key={item} style={{ width: '48%', minHeight: 92 }}><Text style={{ color: theme.colors.text, fontWeight: '900' }}>{item}</Text><Muted>Open panel</Muted></Card>)}
    </View>
  </ScrollView></Screen>;
}
