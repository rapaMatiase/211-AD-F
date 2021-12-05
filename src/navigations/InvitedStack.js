import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';


/* Screen - EMPLOYEES */
import EmployeeLoginScreen from '../screens/Employee/EmployeeLoginScreen'

/* Stacks */
import NeighoutsStack from './NeighoutsStack';
import CamaraScreen from './../screens/CamaraScreen';

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
                name="NewPromotionChooseImage" 
                component={NewPromotionChooseImageScreen} 
                options={{ title: 'Selecciona images'}}
            />
        <Stack.Screen
                name="Camara"
                component={CamaraScreen}
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
                initialParams={{isLoading : false}}
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