import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { Card, Label, Muted, PrimaryButton, Screen, Title } from '../components/Primitives.js';
import { theme } from '../theme.js';

export function TrainerScreen() {
  const [question, setQuestion] = useState('Give chest workout using my gym machines');
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Ask gym, workout, diet, recovery or machine-based training questions.' }]);

  function ask() {
    if (!question.trim()) return;
    setMessages((items) => [...items, { role: 'me', text: question }, { role: 'bot', text: 'Use active machines in your linked gym, warm up first, train with controlled reps and log every set.' }]);
    setQuestion('');
  }

  return <Screen><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
    <Label>Fitness-only assistant</Label>
    <Title>AI Trainer</Title>
    <Muted>Live AI will answer only workout, gym, diet and recovery questions.</Muted>
    <View style={{ gap: 10, marginTop: 16 }}>
      {messages.map((message, index) => <Card key={index} style={{ alignSelf: message.role === 'me' ? 'flex-end' : 'flex-start', maxWidth: '86%', backgroundColor: message.role === 'me' ? theme.colors.primary : theme.colors.card }}>
        <Text style={{ color: message.role === 'me' ? '#050505' : theme.colors.text, fontWeight: '700' }}>{message.text}</Text>
      </Card>)}
    </View>
    <Card style={{ marginTop: 14 }}>
      <TextInput value={question} onChangeText={setQuestion} placeholder="Ask your trainer" placeholderTextColor={theme.colors.muted} style={{ color: theme.colors.text, marginBottom: 12 }} />
      <PrimaryButton onPress={ask}>Ask trainer</PrimaryButton>
    </Card>
  </ScrollView></Screen>;
}
