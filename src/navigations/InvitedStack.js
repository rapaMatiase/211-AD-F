import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
/* Screen - NEIGHOBOURS */
import NeighboursHomeScreen from '../screens/Neighbours/NeighoboursHomeScreen';
import NeighboursSingInScreen from '../screens/Neighbours/NeighboursSignInScreen';
import NeighboursSignUpScreen from '../screens/Neighbours/NeighboursSignUpScreen';

/* Screen - EMPLOYEES */
import EmployeeLoginScreen from '../screens/Employee/EmployeeLoginScreen'

/* Screen - PROMOTIONS */
import PromotionListScreen from '../screens/Promotion/PromotionListScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';

/* Stacks */
import NeighoutsStack from './NeighoutsStack';


const Stack = createNativeStackNavigator();

const InvitedStack = () => {
    return (
        <Stack.Navigator initialRouteName="InvitedHome">
            <Stack.Screen
                name="InvitedHome"
                component={HomeScreen}
                options={{ title: 'Bienvenido' }}
            />

            <Stack.Screen
                name="NeighboursHome"
                component={NeighboursHomeScreen}
                options={{ title: 'Bienvenido vecino' }}
            />
            <Stack.Screen
                name="NeighboursSingIn"
                component={NeighboursSingInScreen}
                options={{ title: 'Marketing' }}
            />
            <Stack.Screen
                name="NeighboursSignUp"
                component={NeighboursSignUpScreen}
                options={{ title: 'Consume' }}
            />

            <Stack.Screen
                name="EmployeeLogin"
                component={EmployeeLoginScreen}
                options={{ title: 'Bienvenido' }}
            />

            <Stack.Screen
                name="PromotionList"
                component={PromotionListScreen}
                options={{ title: 'Consume' }}
            />
            <Stack.Screen
                name="Promotion"
                component={PromotionScreen}
                options={{ title: 'Consume' }}
            />

            <Stack.Screen
                name="NeighboursStack"
                component={NeighoutsStack}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default InvitedStack;