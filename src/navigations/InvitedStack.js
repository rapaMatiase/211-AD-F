import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens  - Promotions*/
import PromotionListScreen from '../screens/Promotion/PromotionListScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';
/* Screens  - Claims*/

import HomeScreen from '../screens/HomeScreen';

/* Stack */
import UserStack from './UserStack';

/* PRuebas */
import ClaimsHomeScreen from '../screens/Claims/ClaimsHomeScreen';

const Stack = createNativeStackNavigator();

const InvitedStack = () => {
    return (
        <Stack.Navigator initialRouteName="Prueba">
            <Stack.Screen 
                name="Prueba"
                component={HomeScreen}

            />
          {/*   <Stack.Screen 
                name="InvitedHome" 
                component={InvitedHomeScreen} 
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen 
                name="EmployeeHome" 
                component={EmployeeHomeScreen} 
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen 
                name="NeighboursHome" 
                component={NeighboursHomeScreen} 
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
                name="NeighboursSignUp" 
                component={NeighboursSignUpScreen} 
                options={{ title: 'Consume' }}
            />
            <Stack.Screen 
                name="NeighboursSingIn" 
                component={NeighboursSingInScreen} 
                options={{ title: 'Marketing' }}
            />
            <Stack.Screen
                name="NeighboursStack"
                component={UserStack}
                options={{headerShown: false}}
            /> */}
        </Stack.Navigator>
    );
}

export default InvitedStack;