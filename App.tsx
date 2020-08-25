import 'react-native-gesture-handler';
import React from 'react';
import FirstScreen from './src/screens/FirstScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from './src/screens/SecondScreen';
import ListScreen from './src/screens/ListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Présentation" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Liste" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

