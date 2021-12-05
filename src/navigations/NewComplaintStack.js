import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screen */



const Stack = createNativeStackNavigator();


const NewComplaintStack = () => {
    return (
        <Stack.Navigator initialRouteName="InvitedHome">
            {/* <Stack.Screen
                name="PromotionList"
                component={PromotionListScreen}
            /> */}

        </Stack.Navigator>
    );
}

export default NewComplaintStack;