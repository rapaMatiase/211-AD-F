import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens */
import UserHomeScreen from './../screens/UserHomeScreen';
import NeighboursForgotPassword from './../screens/Neighbours/NeighboursForgotPassword';
// import PromotionListScreen from '../screens/Promotion/PromotionListScreen';
// import NeighboursBossSreen from '../screens/NewPromotionBossScreen';
// import NeighboursDetailScreen from '../screens/NewPromotionDetailScreen';
// import ComplaintsHomeScreen from '../screens/ComplaintsHomeScreen';
// import ComplaintScreen from '../screens/ComplaintScreen';
// import NewComplaintScreen from '../screens/NewComplaintSceen';

const Stack = createNativeStackNavigator();

const NeighoutsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="UserHome"
                component={UserHomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen 
                name="NeighboursForgotPassword"
                component={NeighboursForgotPassword}
                options={{ title: 'Recuperar contraseña' }}
            />
            {/* 
            <Stack.Screen 
                name="PromotionList" 
                component={PromotionListScreen} 
                options={{ title: 'Consume'}}
            />
            <Stack.Screen 
                name="NeighboursBoss" 
                component={NeighboursBossSreen} 
                options={{ title: 'Nueva'}}
            />
            <Stack.Screen 
                name="NeighboursDetail" 
                component={NeighboursDetailScreen} 
                options={{ title: 'Nueva'}}
            />
            <Stack.Screen 
                name="ComplaintsHome" 
                component={ComplaintsHomeScreen} 
                options={{ title: 'Nueva'}}
            />
            <Stack.Screen 
                name="Complaint" 
                component={ComplaintScreen} 
                options={{ title: 'Nueva'}}
            />
            <Stack.Screen 
                name="NewComplaint" 
                component={NewComplaintScreen} 
                options={{ title: 'Nueva'}}
            /> */}
        </Stack.Navigator>
    );
}

export default NeighoutsStack;