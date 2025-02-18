// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { registerRootComponent } from 'expo';

// function App() {
//   const [name, setName] = useState('');
//   const [isStudent, setIsStudent] = useState(false);

//   const handleButtonPress = () => {
//     Alert.alert('Welcome', `Hello, ${name || 'Guest'}!`);
//   };

//   const toggleSwitch = () => setIsStudent(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>React Native Interactive App</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={text => setName(text)}
//       />

//       <Button title="Say Hello" onPress={handleButtonPress} />

//       <View style={styles.switchContainer}>
//         <Text>Are you a student?</Text>
//         <Switch value={isStudent} onValueChange={toggleSwitch} />
//       </View>

//       <TouchableOpacity style={styles.touchableButton} onPress={() => Alert.alert('Thank you', 'Button pressed!')}>
//         <Text style={styles.touchableButtonText}>Press me</Text>
//       </TouchableOpacity>

//       <Text style={styles.dynamicText}>
//         {isStudent ? 'Student mode activated!' : 'Regular user mode'}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     paddingHorizontal: 8,
//     marginBottom: 20,
//     borderRadius: 5,
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   touchableButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   touchableButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   dynamicText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 18,
//     fontStyle: 'italic',
//   },
// });

// export default registerRootComponent(App);








import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [isStudent, setIsStudent] = useState(false);

  // Обработка нажатия кнопки
  const handleButtonPress = () => {
    Alert.alert('Welcome!', `Hello, ${name || 'Guest'}!`);
  };

  // Переключение статуса студента
  const toggleStudentStatus = () => {
    setIsStudent(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <Text style={styles.header}>React Native App</Text>

      {/* Поле ввода текста */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />

      {/* Кнопка */}
      <Button title="Say Hello" onPress={handleButtonPress} />

      {/* Переключатель со статусом */}
      <View style={styles.switchContainer}>
        <Text>Are you a student?</Text>
        <Switch value={isStudent} onValueChange={toggleStudentStatus} />
      </View>

      {/* Интерактивная кнопка */}
      <TouchableOpacity style={styles.touchableButton} onPress={() => Alert.alert('Thanks!', 'You pressed the button!')}>
        <Text style={styles.touchableButtonText}>Press me</Text>
      </TouchableOpacity>

      {/* Динамический текст */}
      <Text style={styles.dynamicText}>
        {isStudent ? 'Student mode enabled!' : 'Regular mode'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  touchableButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  touchableButtonText: {
    color: 'white',
    fontSize: 16,
  },
  dynamicText: {
    marginTop: 20,
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
