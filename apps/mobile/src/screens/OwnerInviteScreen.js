import React, { useState } from 'react';
import { ScrollView, Text, TextInput } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

export function OwnerInviteScreen() {
  const [phone, setPhone] = useState('9876543210');
  const [sent, setSent] = useState(false);
  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>Member invite</Label>
    <Title>Add Gym Member</Title>
    <Muted>Add a member phone number. The backend will create an invite linked with your gym code.</Muted>
    <Card style={{ marginTop: 16 }}>
      <Text style={{ color: theme.colors.muted, marginBottom: 6 }}>Phone number</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={{ color: theme.colors.text, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 16, padding: 12, marginBottom: 12 }} />
      <PrimaryButton onPress={() => setSent(true)}>Create invite</PrimaryButton>
    </Card>
    {sent ? <Card style={{ marginTop: 14 }}><Text style={{ color: theme.colors.primary, fontWeight: '900', fontSize: 18 }}>Invite ready</Text><Muted>User will receive app download link and BEFIT gym code after SMS or WhatsApp provider is connected.</Muted></Card> : null}
  </ScrollView></Screen>;
}
