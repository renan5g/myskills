import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} onPress={onPress}>
      <Text style={styles.textSkill}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 16,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8,
  },
  textSkill: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});
