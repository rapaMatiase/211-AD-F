import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* SCREENS */
import NuevoReclamoELegirSitioScreen from '../screens/NewClaim/NuevoReclamoElegirSitio';
import NuevoReclamoDetallarUbicacionScreen from '../screens/NewClaim/NuevoReclamoDetallarUbicacionScreen';
import NuevoReclamoSeleccionarRubroScreen from '../screens/NewClaim/NuevoReclamoSeleccionarRubroScreen';
import NuevoReclamoDesperfectoScreen from '../screens/NewClaim/NuevoReclamoDesperfectoScreen';
import NuevoReclamoDetallarDesperfectoScreen from '../screens/NewClaim/NuevoReclamoDetallarDesperfectoScreen';
import NuevoReclamoConfirmarScreen from '../screens/NewClaim/NuevoReclamoConfirmarScreen';
import NuevoReclamoTomarFotosScreen from '../screens/NewClaim/NuevoReclamoTomarFotosScreen';


const Stack = createNativeStackNavigator();

const NewClaimStack = () => {
    return (
        <Stack.Navigator initialRouteName="NewClaimsChoosePlace">
            {/* FISRT SCREEN */}
            <Stack.Screen
                name="NuevoReclamoELegirSitio"
                component={NuevoReclamoELegirSitioScreen}
                options={{ title: 'Sitios reconocidos' }}
            />
            {/* SECOND SCREEN */}
            <Stack.Screen
                name="NuevoReclamoDetallarUbicacion"
                component={NuevoReclamoDetallarUbicacionScreen}
                options={{ title: 'Especifique ubicacion' }}
            />

            {/* THIERD SCREEN */}
            <Stack.Screen
                name="NuevoReclamoSeleccionarRubro"
                component={NuevoReclamoSeleccionarRubroScreen}
                options={{ title: 'Rubro' }}
            />
            {/* FOURTH SCREEN */}
            <Stack.Screen
                name="NuevoReclamoDesperfecto"
                component={NuevoReclamoDesperfectoScreen}
                options={{ title: 'Confirmar' }}
            />
            {/* FIFTH SCREEN */}
            <Stack.Screen
                name="NuevoReclamoDetallarDesperfecto"
                component={NuevoReclamoDetallarDesperfectoScreen}
                options={{ title: 'Confirmar' }}
            />
            {/* SIXTH SCREEN */}
            <Stack.Screen
                name="NuevoReclamoTomarFotos"
                component={NuevoReclamoTomarFotosScreen}
                options={{ title: 'Confirmar' }}
            />
            {/* SEVENTH SCREEN */}
            <Stack.Screen
                name="NuevoReclamoConfirmar"
                component={NuevoReclamoConfirmarScreen}
                options={{ title: 'Confirmar' }}
            />
        
        
        </Stack.Navigator>
    );
}

export default NewClaimStack;