import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ClassComponentProps {
  message: string;
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#cce5ff',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#004085',
  },
});

export default ClassComponent;
