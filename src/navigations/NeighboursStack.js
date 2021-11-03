import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NeighnoursHomeScreen from '../screens/NeighboursHomeScreen';
import NeighboursSignUpScreen from '../screens/NeighboursSignUpScreen';
import NewPromotionScreen from '../screens/NewPromotionScreen';

const Stack = createNativeStackNavigator();

const NeighboursStack = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            {/* <Stack.Screen 
                name="Welcome" 
                component={NeighnoursHomeScreen} 
                options={{ title: 'Bienvenidos vecino' }}
            /> */}
            {/* <Stack.Screen 
                name="SignUp" 
                component={NeighboursSignUpScreen} 
                options={{ title: 'Registrate' }}
            /> */}
            <Stack.Screen 
                name="NewProtions" 
                component={NewPromotionScreen} 
                options={{ title: 'Nueva promocion' }}
            />

        </Stack.Navigator>
    );
}

export default NeighboursStack;