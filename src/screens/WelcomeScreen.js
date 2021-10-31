import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';


function WelcomeScreen() {
    return (
     
      <NativeBaseProvider>
        <Box>Hello world</Box>
       </NativeBaseProvider>
    );
  }

export default WelcomeScreen;