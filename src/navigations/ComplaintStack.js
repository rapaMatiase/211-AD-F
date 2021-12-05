import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* SCREENS */
import ComplaintScreen from '../screens/Complaints/ComplaintDetailScreen';
import ComplaintsHomeScreen from '../screens/Complaints/ComplaintsHomeScreen';
import ComplaintDetailScreen from '../screens/Complaints/ComplaintDetailScreen';

const Stack = createNativeStackNavigator();

const ComplaintStack = () => {
    return (
        <Stack.Navigator initialRouteName="ComplaintHome">
            <Stack.Screen
                name="ComplaintHome"
                component={ComplaintsHomeScreen}
                options={{ title: 'Denuncias' }}
            />

            <Stack.Screen
                name="Complaint"
                component={ComplaintScreen}
                options={{ title: 'Denuncias' }}
            />

            <Stack.Screen
                name="ComplaintDetail"
                component={ComplaintDetailScreen}
                options={{ title: 'Denuncias' }}
            />


        </Stack.Navigator>
    );
}

export default ComplaintStack;