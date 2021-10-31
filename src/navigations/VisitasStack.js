import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  WelcomeScreem from './../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const VisitasStack = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreem} 
                options={{ title: 'Bienvenidos' }}
            />
        </Stack.Navigator>
    );
}

export default VisitasStack;