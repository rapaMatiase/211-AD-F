import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* SCREENS */
import HomeScreen from '../screens/HomeScreen';
import NewClaimsChoosePlaceScreen from '../screens/NewClaim/NewClaimsChoosePlaceScreen';
import NewClaimsDetailScreen from '../screens/NewClaim/NewClaimsDetailScreen';
import NewComplaintsDetailPlaceScreen from '../screens/NewComplaints/NewComplaintsDetailPlaceScreen';
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
                name="NewComplaintsDetailPlace"
                component={NewComplaintsDetailPlaceScreen}
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