import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import ClaimsHomeScreen from '../screens/Claims/ClaimsHomeScreen';

const Stack = createNativeStackNavigator();

const ClaimStack = () => {
    return (
        <Stack.Navigator initialRouteName="ClaimHome">
            <Stack.Screen
                name="ClaimHome"
                component={ClaimsHomeScreen}
                options={{title: "Reclamos"}}
            />
        </Stack.Navigator>
    );
}

export default ClaimStack;