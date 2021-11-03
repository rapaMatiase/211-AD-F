import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InvitedStack from './src/navigations/InvitedStack';




function App() {
  return (
    <NavigationContainer>
        <InvitedStack />
    </NavigationContainer>
  );
}

export default App;