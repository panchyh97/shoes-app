import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ButtonScreen from './screens/ButtonScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          name="ButtonScreen"
          component={ButtonScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;