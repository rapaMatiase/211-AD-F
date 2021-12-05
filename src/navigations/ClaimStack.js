import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import ClaimsHomeScreen from '../screens/Claims/ClaimsHomeScreen';
import ClaimDetailScreen from '../screens/Claims/ClaimDetailScreen';

const Stack = createNativeStackNavigator();

const ClaimStack = () => {
    return (
        <Stack.Navigator initialRouteName="ClaimHome">
            <Stack.Screen
                name="ClaimHome"
                component={ClaimsHomeScreen}
                options={{title: "Reclamos"}}
            />
            <Stack.Screen
                name="ClaimDetail"
                component={ClaimDetailScreen}
                options={{title: "Reclamos"}}
            />
        </Stack.Navigator>
    );
}

export default ClaimStack;