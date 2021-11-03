import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens */
import  WelcomeScreem from '../screens/WelcomeScreen';
import PromotionListScreen from '../screens/PromotionListScreen';
import PromotionScreen from '../screens/PromotionScreen';
import NeighoboursHomeScreen from '../screens/NeighoboursHomeScreen';
import EmployeeHomeScreen from './../screens/EmployeeHomeScreen';
/* Stack */
import UserStack from './UserStack';

const Stack = createNativeStackNavigator();

const InvitedStack = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreem} 
                options={{ title: 'Bienvenidos' }}
            />
            <Stack.Screen 
                name="PromotionList" 
                component={PromotionListScreen} 
                options={{ title: 'Promosiones' }}
            />
            <Stack.Screen 
                name="Promotion" 
                component={PromotionScreen} 
                options={{ title: 'Promosion' }}
            />
            <Stack.Screen 
                name="NeighoboursHome"
                component={NeighoboursHomeScreen}
                options={{title : 'Menu'}}
            />
            <Stack.Screen 
                name="EmployeeHome"
                component={EmployeeHomeScreen}
                options={{title : 'Bienvenido esclavo'}}
            />
            
            <Stack.Screen
                name="UsersScreen"
                component={UserStack}
                options={{title: "Bienvenido!!"}}
            />
        </Stack.Navigator>
    );
}

export default InvitedStack;