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
import InputTextarea from './../../components/InputTextarea';

const NewPromotionScreen = ({navigation, route}) => {
    const [detail, setDetail] = useState("")

    const validatorTextAea = (inputText) => {
        return    InputTextarea ? false : true
    } 

    const NextScreen = () =>{
        navigation.navigate(
            'NewPromotionStack', 
            {
                screen : 'CamaraPromotion', 
                params : {
                    ...route.params,
                    detail
                }
            }
        )
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            
                <VStack space={4} style={{flex: 1}}>
                    <Heading size="lg"> La promo </Heading>
                    <Text fontSize="lg"> Describe la promosion para ser elegido por los visitantes al municipio. </Text>
                    <InputTextarea 
                        setValue={setDetail}
                        validator={validatorTextAea}
                        title="Descipcion de la promo"
                        placeholder="Mi promo es la mejor porque ..."
                    />
                    <Button mt="4" onPress={NextScreen}> Continuar </Button>
                </VStack>
            
        </LayoutWithImage>
    );
}

export default NewPromotionScreen;