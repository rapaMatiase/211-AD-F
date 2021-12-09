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

const NuevoReclamoTomarFotosScreen = ({navigation, route}) => {
    const [detailPlace, setDetailPlace] = useState("")



    const NextScreen = () =>{
        navigation.navigate(
            'NewClaimStack', 
            {
                screen : 'NuevoReclamoConfirmar', 
                params : {
                    ...route.params,
                }
            }
        )
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            
                <VStack space={4} style={{flex: 1}}>
                    <Heading size="lg"> Fotos despues</Heading>
                    
                    <Button mt="4" onPress={NextScreen}> Continuar </Button>
                </VStack>
            
        </LayoutWithImage>
    );
}

export default NuevoReclamoTomarFotosScreen;