import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* SCREENS */
import HomeScreen from '../screens/HomeScreen';

/* Screen - NEIGHOBOURS */
import NeighboursStack from '../navigations/NeighoutsStack';
import EmployeeStack from '../navigations/EmployeeStack';
import PromotionStack from '../navigations/PromotionStack';
import ClaimStack from './ClaimStack';
import NewClaimStack from './NewClaimStack';
import ComplaintStack from './ComplaintStack';
import NewComplaintStack from './NewComplaintStack';
import NewPromotionStack from './NewPromotionStack';
const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Bienvenido' }}
            />

            <Stack.Screen
                name="NeighboursStack"
                component={NeighboursStack}
                options={{  headerShown: false }}
            />

            <Stack.Screen
                name="EmployeeStack"
                component={EmployeeStack}
                options={{  headerShown: false }}
            />

            <Stack.Screen
                name="PromotionStack"
                component={PromotionStack}
                options={{  headerShown: false }}
            />

            <Stack.Screen
                name="ClaimStack"
                component={ClaimStack}
                options={{  headerShown: false }}
            />

            <Stack.Screen
                name="NewClaimStack"
                component={NewClaimStack}
                options={{  headerShown: false }}
            />

            <Stack.Screen
                name="ComplaintStack"
                component={ComplaintStack}
                options={{  headerShown: false }}
            />
            
            <Stack.Screen
                name="NewComplaintStack"
                component={NewComplaintStack}
                options={{  headerShown: false }}
            />

            <Stack.Screen
                name="NewPromotionStack"
                component={NewPromotionStack}
                options={{  headerShown: false }}
            />


        </Stack.Navigator>
    );
}

export default MainStack;