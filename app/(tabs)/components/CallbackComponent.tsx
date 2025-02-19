import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface CallbackComponentProps {
  onButtonPress: (message: string) => void;
}

const CallbackComponent: React.FC<CallbackComponentProps> = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Trigger Callback" onPress={() => onButtonPress('Button was pressed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default CallbackComponent;
