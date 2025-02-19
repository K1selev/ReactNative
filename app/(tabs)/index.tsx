import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import StatelessComponent from './components/StatelessComponent';
import StatefulComponent from './components/StatefulComponent';
import ChildComponentWrapper from './components/ChildComponentWrapper';
import CallbackComponent from './components/CallbackComponent';

export default function App() {
  const handleCallback = (message: string) => {
    Alert.alert('Callback Triggered', message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Custom Components App</Text>

      {/* Многократное использование функционального компонента */}
      <FunctionalComponent title="Hello from Functional Component 1" />
      <FunctionalComponent title="Hello from Functional Component 2" />

      {/* Класс-компонент */}
      <ClassComponent message="Message from Class Component" />

      {/* Stateless компонент */}
      <StatelessComponent />

      {/* Stateful компонент */}
      <StatefulComponent />

      {/* Компонент с дочерними элементами */}
      <ChildComponentWrapper>
        <Text style={styles.childText}>This is a child element inside ChildComponentWrapper!</Text>
      </ChildComponentWrapper>

      {/* Компонент с функцией обратного вызова */}
      <CallbackComponent onButtonPress={handleCallback} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  childText: {
    fontSize: 16,
    color: '#333',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
});
