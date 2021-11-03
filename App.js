import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import VisitasStack from './src/navigations/VisitasStack';
import NeighboursStack from './src/navigations/NeighboursStack';

function App() {
  return (
    <NavigationContainer>
      <VisitasStack />
    </NavigationContainer>
  );
}

export default App;