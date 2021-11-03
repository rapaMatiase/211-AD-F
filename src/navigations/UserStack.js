import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens */
import UserHomeScreen from './../screens/UserHomeScreen';
import PromotionListScreen from '../screens/PromotionListScreen';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="UserHome"
                component={UserHomeScreen}
                options={{ title: 'Ahora sos nuestro, jaja' }}
            />
            <Stack.Screen 
                name="PromotionList" 
                component={PromotionListScreen} 
                options={{ title: 'Consume',   }}
            />
        </Stack.Navigator>
    );
}

export default UserStack;