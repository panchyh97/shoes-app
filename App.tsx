import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import ButtonScreen from './screens/ButtonScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Listado de zapatos"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (<MaterialCommunityIcons name='home' />)
          }}
        />
        <Tab.Screen
          name="Botón"
          component={ButtonScreen}
          options={{
            tabBarIcon: () => (<MaterialCommunityIcons name='android-messages' />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;