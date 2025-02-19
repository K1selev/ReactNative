import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatelessComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Stateless Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f8d7da',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#721c24',
  },
});

export default StatelessComponent;
