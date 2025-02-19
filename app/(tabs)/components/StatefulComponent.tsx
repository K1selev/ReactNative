import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StatefulComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title="Increase Counter" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff3cd',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#856404',
    marginBottom: 10,
  },
});

export default StatefulComponent;
