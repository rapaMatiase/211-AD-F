import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  WelcomeScreem from '../screens/WelcomeScreen';
import PromotionListScreen from '../screens/PromotionListScreen';
import PromotionScreen from '../screens/PromotionScreen';

const Stack = createNativeStackNavigator();

const VisitasStack = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreem} 
                options={{ title: 'Bienvenidos' }}
            />
            <Stack.Screen 
                name="PromotionList" 
                component={PromotionListScreen} 
                options={{ title: 'Promosiones' }}
            />
            <Stack.Screen 
                name="Promotion" 
                component={PromotionScreen} 
                options={{ title: 'Promosion' }}
            />
        </Stack.Navigator>
    );
}

export default VisitasStack;