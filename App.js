import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MinProvider, useMinContext } from './src/contexts/min';

const Stack = createStackNavigator();

const App = () => {
  const [minTemp, setMinTemp] = useState(25);
  const [maxTemp, setMaxTemp] = useState(100);
  const [isMinEnabled, setIsMinEnabled] = useState(true);
  const [isMaxEnabled, setIsMaxEnabled] = useState(false);
  // const [minProvider, setMinContext] = useState('32')
  // const min = useMinContext();

  return (
    <MinProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Welcome', min:'foobar'}}
          />  
        <Stack.Screen 
            name="SettingsScreen" 
            component={SettingsScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MinProvider>
  )

}
export default App;