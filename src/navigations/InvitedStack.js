import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screen */
import HomeScreen from '../screens/HomeScreen';


/* Stack */
import UserStack from './UserStack';

/* PRuebas */
import NewComplaintDetailSceen from "../screens/NewComplaints/NewComplaintDetail";
import NewComplaintConfirmSceen from '../screens/NewComplaints/NewComplaintConfirmSceen';
import NewComplaintAcceptSceen from '../screens/NewComplaints/NewComplaintAcceptScreen';
const Stack = createNativeStackNavigator();

const InvitedStack = () => {
    return (
        <Stack.Navigator initialRouteName="Prueba">
            <Stack.Screen 
                name="Prueba"
                component={NewComplaintDetailSceen}
                options={{
                    title: 'Inicio',
                    headerStyle: {
                      backgroundColor: '#2F824C',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            />
          {/*   <Stack.Screen 
                name="InvitedHome" 
                component={InvitedHomeScreen} 
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen 
                name="EmployeeHome" 
                component={EmployeeHomeScreen} 
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen 
                name="NeighboursHome" 
                component={NeighboursHomeScreen} 
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen 
                name="PromotionList" 
                component={PromotionListScreen} 
                options={{ title: 'Consume' }}
            />
            <Stack.Screen 
                name="Promotion" 
                component={PromotionScreen} 
                options={{ title: 'Consume' }}
            />
            <Stack.Screen 
                name="NeighboursSignUp" 
                component={NeighboursSignUpScreen} 
                options={{ title: 'Consume' }}
            />
            <Stack.Screen 
                name="NeighboursSingIn" 
                component={NeighboursSingInScreen} 
                options={{ title: 'Marketing' }}
            />
            <Stack.Screen
                name="NeighboursStack"
                component={UserStack}
                options={{headerShown: false}}
            /> */}
        </Stack.Navigator>
    );
}

export default InvitedStack;