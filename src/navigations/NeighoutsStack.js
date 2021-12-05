import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import NeighboursSingInScreen from '../screens/Neighbours/NeighboursSignInScreen';
import NeighboursSignUpScreen from '../screens/Neighbours/NeighboursSignUpScreen';
import NeighboursHomeScreen from '../screens/Neighbours/NeighoboursHomeScreen';
import UserHomeScreen from '../screens/UserHomeScreen';

const Stack = createNativeStackNavigator();

const NeighoutsStack = () => {
    return (
        <Stack.Navigator initialRouteName="NeighnoursHome">
            <Stack.Screen
                name="NeighnoursHome"
                component={NeighboursHomeScreen}
                options={{title: "Bienvenido vecino",}}
            />
            <Stack.Screen
                name="NeighnoursSingIn"
                component={NeighboursSingInScreen}
            />
            <Stack.Screen
                name="NeighnoursSingUp"
                component={NeighboursSignUpScreen}
            />
            <Stack.Screen
                name="UserHome"
                component={UserHomeScreen}
            />
        </Stack.Navigator>
    );
}

export default NeighoutsStack;