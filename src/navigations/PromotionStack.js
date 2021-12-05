import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screen */
import PromotionListScreen from '../screens/Promotion/PromotionListScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';

const Stack = createNativeStackNavigator();


const PromotionStack = () => {
    return (
        <Stack.Navigator initialRouteName="PromotionList">
            <Stack.Screen
                name="PromotionList"
                component={PromotionListScreen}
            />
            <Stack.Screen
                name="PromotionDetail"
                component={PromotionScreen}
            />
        </Stack.Navigator>
    );
}

export default PromotionStack;