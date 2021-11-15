import React, { useState } from "react";
import LayoutWithImage from "../components/LayoutWithImage";
import {
    VStack,
    Text,
    Button,
    Heading,
    TextArea,
    View
} from "native-base";
import InputWithControl from "../components/InputWithControl";
import MunicipioEdificioImage from './../assets/img/EdificioMunicipioDeMerlo.jpeg';

const NewPromotionScreen = () => {
    const [detail, setDetail] = useState("")

    const [numberCharacters, setNumberCharacters] = useState(0)

    const countCharacters = (text) => {
        setDetail(text)
        const count = (text.match(/is/g) || []).length
        setNumberCharacters(count)
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            
                <VStack space={4} style={{flex: 1}}>
                    <Heading size="lg"> La promo </Heading>
                    <Text fontSize="lg"> Describe la promosion para ser elegido por los visitantes al municipio. </Text>
                    <Text> ( {numberCharacters} /1000) </Text>
                    <TextArea 
                        fontSize="lg"
                        height="220"
                        onChangeText={(input) => countCharacters(input)}
                        placeholder="Mi promo es la mejor porque ..."
                        />

                    <Button mt="4" onPress={() => console.log("Funciona")}> Continuar </Button>
                </VStack>
            
        </LayoutWithImage>
    );
}

export default NewPromotionScreen;