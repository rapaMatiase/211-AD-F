import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InvitedStack from './src/navigations/InvitedStack';
import NeighboursStack from './src/navigations/NeighboursStack';

function App() {
  return (
    <NavigationContainer>
      <InvitedStack />
    </NavigationContainer>
  );
}

export default App;