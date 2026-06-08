import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../theme.js';

export function Screen({ children }) {
  return <View style={{ flex: 1, backgroundColor: theme.colors.background, padding: 16 }}>{children}</View>;
}

export function Card({ children, style }) {
  return <View style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border, borderWidth: 1, borderRadius: theme.radius.xl, padding: 16, ...style }}>{children}</View>;
}

export function Title({ children }) {
  return <Text style={{ color: theme.colors.text, fontSize: 34, fontWeight: '900', letterSpacing: -2 }}>{children}</Text>;
}

export function Label({ children }) {
  return <Text style={{ color: theme.colors.primary, fontSize: 11, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>{children}</Text>;
}

export function Muted({ children }) {
  return <Text style={{ color: theme.colors.muted, fontSize: 13, lineHeight: 19 }}>{children}</Text>;
}

export function PrimaryButton({ children, onPress }) {
  return <TouchableOpacity onPress={onPress} style={{ backgroundColor: theme.colors.primary, borderRadius: theme.radius.md, paddingVertical: 13, paddingHorizontal: 16, alignItems: 'center' }}><Text style={{ color: '#050505', fontWeight: '900' }}>{children}</Text></TouchableOpacity>;
}

export function Stat({ value, label }) {
  return <View style={{ flex: 1, backgroundColor: theme.colors.surface, borderRadius: theme.radius.lg, padding: 14, borderWidth: 1, borderColor: theme.colors.border }}><Text style={{ color: theme.colors.text, fontSize: 23, fontWeight: '900' }}>{value}</Text><Text style={{ color: theme.colors.muted, fontSize: 11, marginTop: 4 }}>{label}</Text></View>;
}
