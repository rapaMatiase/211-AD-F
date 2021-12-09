import React, { useState } from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import {
    VStack,
    Text,
    Button,
    Heading,
    TextArea,
} from "native-base";
import InputWithControl from "../../components/InputWithControl";
import MunicipioEdificioImage from './../../assets/img/EdificioMunicipioDeMerlo.jpeg';
import InputTextarea from '../../components/InputTextarea';

const NuevoReclamoDetallarUbicacionScreen = ({navigation, route}) => {
    const [detailPlace, setDetailPlace] = useState("")

    const validatorTextAea = (inputText) => {
        return    InputTextarea ? false : true
    } 

    const NextScreen = () =>{
        navigation.navigate(
            'NewClaimStack', 
            {
                screen : 'NuevoReclamoSeleccionarRubro', 
                params : {
                    ...route.params,
                    detailPlace
                }
            }
        )
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            
                <VStack space={4} style={{flex: 1}}>
                    <Heading size="lg">  Detalle la ubicacion </Heading>
                    <Text fontSize="lg"> Necesitamos que detalle la ubicacion del reclamo a hacer. </Text>
                    <InputTextarea 
                        setValue={setDetailPlace}
                        validator={validatorTextAea}
                        title="Descipcion de la ubicacion"
                        placeholder="Sobre la calle Perior, entre alvarez y jonte, frente al local de jose."
                    />
                    <Button mt="4" onPress={NextScreen}> Continuar </Button>
                </VStack>
            
        </LayoutWithImage>
    );
}

export default NuevoReclamoDetallarUbicacionScreen;