import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { MinProvider, MaxProvider, IsMinOnProvider, IsMaxOnProvider, MinContext, MaxContext, IsMinOnContext, IsMaxOnContext } from './src/contexts/min';

const Stack = createStackNavigator();

const App = () => {

  return (
    <MinProvider>
      <MaxProvider>
        <IsMinOnProvider>
          <IsMaxOnProvider>
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
      </IsMaxOnProvider>
      </IsMinOnProvider>
      </MaxProvider>
    </MinProvider>
  )

}
export default App;