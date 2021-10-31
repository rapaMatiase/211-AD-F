import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  WelcomeScreem from './../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const VisitasStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreem} 
            />
        </Stack.Navigator>
    );
}

export default VisitasStack;