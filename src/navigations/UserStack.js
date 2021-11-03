import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/NeighoboursHomeScreen';
import NeighboursSignUpScreen from '../screens/NeighboursSignUpScreen';
import NewPromotionBossScreen from '../screens/NewPromotionBossScreen';
import NewPromotionDetailScreen from '../screens/NewPromotionDetailScreen';
import NeighboursSingInScreen from '../screens/NeighboursSignInScreen';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
                name="Welcome" 
                component={HomeScreen} 
                options={{ title: 'Bienvenidos vecino' }}
            />
            {/* <Stack.Screen 
                name="SignUp" 
                component={NeighboursSignUpScreen} 
                options={{ title: 'Registrate' }}
            /> */}
            {/* <Stack.Screen 
                name="NewProtions" 
                component={NewPromotionBossScreen} 
                options={{ title: 'Nueva promocion' }}
            /> */}
            {/* <Stack.Screen 
                name="NewProtionsDetail" 
                component={NewPromotionDetailScreen} 
                options={{ title: 'Nueva promocion' }}
            /> */}
{/* <Stack.Screen 
                name="NeighboursSingInScreen" 
                component={NeighboursSingInScreen} 
                options={{ title: 'Inicio de sesion' }}
            /> */}
<Stack.Screen 
                name="Home screen" 
                component={HomeScreen} 
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    );
}

export default UserStack;