import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


const NewPromotionStack = () => {
    return (
        <Stack.Navigator initialRouteName="InvitedHome">
            {/* <Stack.Screen
                name="InvitedHome"
                component={HomeScreen}
                options={{ title: 'Bienvenido' }}
            /> */}


        </Stack.Navigator>
    );
}

export default NewPromotionStack;