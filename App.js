import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InvitedStack from './src/navigations/InvitedStack';
import { createBottomTabNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <InvitedStack />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;