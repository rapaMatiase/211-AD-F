import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens */
import UserHomeScreen from './../screens/UserHomeScreen';


const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="UserHome"
                component={UserHomeScreen}
                options={{ title: 'Ahora sos nuestro, jaja', headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default UserStack;