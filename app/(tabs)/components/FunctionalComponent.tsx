import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FunctionalComponentProps {
  title: string;
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#d4edda',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#155724',
  },
});

export default FunctionalComponent;
