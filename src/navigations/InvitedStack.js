import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screen */
import HomeScreen from '../screens/HomeScreen';

/* Screen - Neighbours */
import NeighoboursHomeScreen from '../screens/Neighbours/NeighoboursHomeScreen';
import NeighboursSingInScreen from '../screens/Neighbours/NeighboursSignInScreen';
import NeighboursForgotPassword from '../screens/Neighbours/NeighboursForgotPassword';
import NeighboursSignUpScreen from '../screens/Neighbours/NeighboursSignUpScreen';

/* Screen - User */
import UserHomeScreen from '../screens/UserHomeScreen';

/* Screens  - Employee*/
import EmployeeLoginScreen from '../screens/Employee/EmployeeLoginScreen';

/* Screens  - Promotions*/
import PromotionListScreen from '../screens/Promotion/PromotionListScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';
/* Screens  - Claims*/


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
                component={UserHomeScreen}
                options={{
                    title: 'Inicio',
                    headerStyle: {
                      backgroundColor: '#2F824C',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
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