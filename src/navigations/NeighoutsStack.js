import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens */
import UserHomeScreen from './../screens/UserHomeScreen';
import NeighboursForgotPassword from './../screens/Neighbours/NeighboursForgotPassword';
import PromotionListScreen from './../screens/Promotion/PromotionListScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';
import NewPromotionBossScreen from '../screens/NewPromotion/NewPromotionBossScreen';
import NeighboursDetailScreen from '../screens/NewPromotion/NewPromotionDetailScreen';
import NewPromotionChooseImageScreen from '../screens/NewPromotion/NewPromotionChooseImageScreen';
import NewPromotionConfirmScreen from '../screens/NewPromotion/NewPromotionConfirmScreen';
import CamaraPromotionScreen from '../screens/NewPromotion/CamaraPromotionScreen';
import NewPromotionServicioProfecionalScreen from '../screens/NewPromotion/NewPromotionServicioProfecionalScreen';
// import ComplaintsHomeScreen from '../screens/ComplaintsHomeScreen';
// import ComplaintScreen from '../screens/ComplaintScreen';
// import NewComplaintScreen from '../screens/NewComplaintSceen';

import NewPromotionDesdeDiaScreen from '../screens/NewPromotion/NewPromotionDesdeDia';
import NewPromotionHastaDiaScreen from '../screens/NewPromotion/NewPromotionHastaDia';

import NewPromotionDesdeHorarioScreen from '../screens/NewPromotion/NewPromotionDesdeHorario';
import NewPromotionHastaHorarioScreen from '../screens/NewPromotion/NewPromotionHastaHoraraio';
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
            <Stack.Screen 
                name="NewPromotionServicioProfecional"
                component={NewPromotionServicioProfecionalScreen}
                options={{ title: 'Recuperar contraseña' }}
            />


<Stack.Screen 
                name="NewPromotionDesdeDia"
                component={NewPromotionDesdeDiaScreen}
                options={{ title: 'Recuperar contraseña' }}
            />
<Stack.Screen 
                name="NewPromotionHastaDia"
                component={NewPromotionHastaDiaScreen}
                options={{ title: 'Recuperar contraseña' }}
            />
<Stack.Screen 
                name="NewPromotionDesdeHorario"
                component={NewPromotionDesdeHorarioScreen}
                options={{ title: 'Recuperar contraseña' }}
            />
<Stack.Screen 
                name="NewPromotionHastaHorario"
                component={NewPromotionHastaHorarioScreen}
                options={{ title: 'Recuperar contraseña' }}
            />

            <Stack.Screen 
                name="CamaraPromotion" 
                component={CamaraPromotionScreen} 
                options={{ title: 'Consume'}}
                initialParams={{isLogin : true}}
            />

            <Stack.Screen 
                name="PromotionList" 
                component={PromotionListScreen} 
                options={{ title: 'Consume'}}
                initialParams={{isLogin : true}}
            />
            <Stack.Screen 
                name="PromotionScreen" 
                component={PromotionScreen} 
                options={{ title: 'Detalle de promosion'}}
            />

            <Stack.Screen 
                name="NewPromotionBossScreen" 
                component={NewPromotionBossScreen} 
                options={{ title: 'Detalle de promosion'}}
            />

            <Stack.Screen 
                name="NeighboursDetail" 
                component={NeighboursDetailScreen} 
                options={{ title: 'Nueva'}}
            />
            
            <Stack.Screen 
                name="NewPromotionChooseImage" 
                component={NewPromotionChooseImageScreen} 
                options={{ title: 'Selecciona images'}}
            />
            <Stack.Screen 
                name="NewPromotionConfirm" 
                component={NewPromotionConfirmScreen} 
                options={{ title: 'Confirme la promo'}}
            />

            {/* 
                        <Stack.Screen 
                name="NeighboursBoss" 
                component={NeighboursBossSreen} 
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