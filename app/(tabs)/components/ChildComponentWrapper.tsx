import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ChildComponentWrapperProps {
  children: React.ReactNode;
}

const ChildComponentWrapper: React.FC<ChildComponentWrapperProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#e2e3e5',
    borderRadius: 5,
  },
});

export default ChildComponentWrapper;
