import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';


const Stack = createStackNavigator();

const App = () => {

  return (
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
  )

}
export default App;