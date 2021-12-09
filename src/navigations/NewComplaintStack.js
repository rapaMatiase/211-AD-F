import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screen */
import NewComplaintChoosePlace from '../screens/NewComplaints/NewComplaintChoosePlace';
import NewComplaintsDetailPlaceScreen from '../screens/NewComplaints/NewComplaintsDetailPlaceScreen';
import NewComplaintsPersonDataScreen from '../screens/NewComplaints/NewComplaintPersonData';
import NewComplaintsConfirmScreen from '../screens/NewComplaints/NewComplaintsConfirmScreen';

const Stack = createNativeStackNavigator();


const NewComplaintStack = () => {
    return (
        <Stack.Navigator initialRouteName="InvitedHome">           
            {/* FISRT SCREEN */}
            <Stack.Screen
                name="NewComplaintChoose"
                component={NewComplaintChoosePlace}
            /> 
            {/* SECOND SCREEN */}
            <Stack.Screen
                name="NewComplaintsDetailPlace"
                component={NewComplaintsDetailPlaceScreen}
            /> 
            {/* THIERD SCREEN */}
            <Stack.Screen
                name="NewComplaintsPersonData"
                component={NewComplaintsPersonDataScreen}
            /> 
            {/* FOURTH SCREEN */}
            <Stack.Screen
                name="NewComplaintsConfirm"
                component={NewComplaintsConfirmScreen}
            /> 


        </Stack.Navigator>
    );
}

export default NewComplaintStack;