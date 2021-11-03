import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens */
import InvitedHomeScreen from '../screens/InvitedHomeScreen';
import EmployeeHomeScreen from '../screens/EmployeeHomeScreen';
import NeighboursHomeScreen from '../screens/NeighoboursHomeScreen';
import PromotionListScreen from '../screens/PromotionListScreen';
import PromotionScreen from '../screens/PromotionScreen';
import NeighboursSignUpScreen from '../screens/NeighboursSignUpScreen';
import NeighboursSingInScreen from '../screens/NeighboursSignInScreen';
/* Stack */
import UserStack from './UserStack';

const Stack = createNativeStackNavigator();

const InvitedStack = () => {
    return (
        <Stack.Navigator initialRouteName="InvitedHome">
            <Stack.Screen 
                name="InvitedHome" 
                component={InvitedHomeScreen} 
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen 
                name="EmployeeHome" 
                component={EmployeeHomeScreen} 
                options={{ title: 'Bienvenido esclavo' }}
            />
            <Stack.Screen 
                name="NeighboursHome" 
                component={NeighboursHomeScreen} 
                options={{ title: 'Bienvenido victima' }}
            />
            <Stack.Screen 
                name="PromotionList" 
                component={PromotionListScreen} 
                options={{ title: 'Consume' }}
            />
            <Stack.Screen 
                name="Promotion" 
                component={PromotionScreen} 
                options={{ title: 'Consume este producto' }}
            />
            <Stack.Screen 
                name="NeighboursSignUp" 
                component={NeighboursSignUpScreen} 
                options={{ title: 'Consume este producto' }}
            />
            <Stack.Screen 
                name="NeighboursSingIn" 
                component={NeighboursSingInScreen} 
                options={{ title: 'Marketing' }}
            />
            <Stack.Screen
                name="NeighboursStack"
                component={UserStack}
            />
        </Stack.Navigator>
    );
}

export default InvitedStack;