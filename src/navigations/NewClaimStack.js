import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* SCREENS */
import HomeScreen from '../screens/HomeScreen';
import NewClaimsChoosePlaceScreen from '../screens/NewClaim/NewClaimsChoosePlaceScreen';
import NewClaimsDetailScreen from '../screens/NewClaim/NewClaimsDetailScreen';
import NewClaimsDetailPlaceScreen from './../screens/NewClaim/NewClaimsDetailPlaceScreen';
import NewClaimsConfirmScreen from '../screens/NewClaim/NewClaimsConfirmScreen';

const Stack = createNativeStackNavigator();

const NewClaimStack = () => {
    return (
        <Stack.Navigator initialRouteName="NewClaimsChoosePlace">
            
            <Stack.Screen
                name="NewClaimsChoosePlace"
                component={NewClaimsChoosePlaceScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewClaimsDetailPlaceScreen"
                component={NewClaimsDetailPlaceScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewClaimsDetail"
                component={NewClaimsDetailScreen}
                options={{ title: 'Bienvenido' }}
            />
            
 
            <Stack.Screen
                name="NewClaimsConfirm"
                component={NewClaimsConfirmScreen}
                options={{ title: 'Bienvenido' }}
            />
        </Stack.Navigator>
    );
}

export default NewClaimStack;