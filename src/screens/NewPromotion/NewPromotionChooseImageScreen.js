import React, { useState } from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import {
    VStack,
    Text,
    Button,
    Heading,
    Pressable
} from "native-base";
import MunicipioEdificioImage from './../../assets/img/EdificioMunicipioDeMerlo.jpeg';
import Camara from './../../components/Camra';

const NewPromotionChooseImageScreen = ({navigation, route}) => {

    const NextScreen = () =>{
        navigation.navigate(
            'NeighboursStack', 
            {
                screen : 'NewPromotionConfirm', 
                params : {
                    ...route.params,
                }
            }
        )
    }
    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            {/* <Pressable onPress={NextScreen}>
               <Text> HOla </Text>
            </Pressable> */}
            <Camara />
        </LayoutWithImage>
    );
}

export default NewPromotionChooseImageScreen;