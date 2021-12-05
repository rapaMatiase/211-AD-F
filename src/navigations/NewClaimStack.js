import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* SCREENS */
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const NewClaimStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Bienvenido' }}
            />

 

        </Stack.Navigator>
    );
}

export default NewClaimStack;