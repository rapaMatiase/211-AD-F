import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            
        </Stack.Navigator>
    );
}

export default UserStack;