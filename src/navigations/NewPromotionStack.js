import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewPromotionBossScreen from './../screens/NewPromotion/NewPromotionBossScreen';
import NewPromotionServicioProfesionalScreen from './../screens/NewPromotion/NewPromotionServicioProfecionalScreen';
import NewPromotionDesdeDiaScreen from './../screens/NewPromotion/NewPromotionDesdeDia';
import NewPromotionHastaDiaScreen from './../screens/NewPromotion/NewPromotionHastaDia';
import NewPromotionDesdeHorarioScreen from './../screens/NewPromotion/NewPromotionDesdeHorario';
import NewPromotionHastaHorarioScreen from './../screens/NewPromotion/NewPromotionHastaHoraraio';
import NewPromotionDetailScreen from './../screens/NewPromotion/NewPromotionDetailScreen';
import CamaraPromotionScreen from './../screens/NewPromotion/CamaraPromotionScreen';
import NewPromotionConfirmScreen from './../screens/NewPromotion/NewPromotionConfirmScreen';

const Stack = createNativeStackNavigator();


const NewPromotionStack = () => {
    return (
        <Stack.Navigator initialRouteName="NewPromotionBoss">
            <Stack.Screen
                name="NewPromotionBoss"
                component={NewPromotionBossScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewPromotionServicioProfesional"
                component={NewPromotionServicioProfesionalScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewPromotionDesdeDia"
                component={NewPromotionDesdeDiaScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewPromotionHastaDia"
                component={NewPromotionHastaDiaScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewPromotionDesdeHorario"
                component={NewPromotionDesdeHorarioScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewPromotionHastaHorario"
                component={NewPromotionHastaHorarioScreen}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name="NewPromotionDetail"
                component={NewPromotionDetailScreen}
                options={{ title: 'Bienvenido' }}
            />

            <Stack.Screen
                name="CamaraPromotion"
                component={CamaraPromotionScreen}
                options={{ title: 'Bienvenido' }}
            />

            <Stack.Screen
                name="NewPromotionConfirm"
                component={NewPromotionConfirmScreen}
                options={{ title: 'Bienvenido' }}
            />
        </Stack.Navigator>
    );
}

export default NewPromotionStack;