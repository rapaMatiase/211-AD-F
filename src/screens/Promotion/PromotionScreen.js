import React from "react";
import {
    Box,
    Heading,
    AspectRatio,
    Text,
    Image,
    Stack,
    HStack,
    VStack,
    Pressable,
    NativeBaseProvider
} from "native-base";
import ImageIconFlag from './../../assets/img/maps-and-flags.png';
import ImageIconClock from './../../assets/img/clock-circular-outline.png';
import ImageIconCalendar from './../../assets/img/calendar.png';

import TextIcon from "../../components/TextIcon";

import LayoutWithImage from "../../components/LayoutWithImage";

const PromotionScreen = ({ route }) => {

    return (
        <LayoutWithImage
            image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        >
            <Stack space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        {route.params.item.tituloPromocion}
                    </Heading>
                </Stack>
                <Text fontSize="lg" fontWeight="400">
                    {route.params.item.descripcion}
                </Text>
                <VStack alignItems="flex-start" pt="5" space={4} justifyContent="space-between">
                    <TextIcon text={route.params.item.direccion} imageIcon={ImageIconFlag} />
                    <TextIcon text={`${route.params.item.desdeDia} a ${route.params.item.hastaDia}`} imageIcon={ImageIconClock} />
                    <TextIcon text={`${route.params.item.desdeHora} a ${route.params.item.hastaHora}`} imageIcon={ImageIconCalendar} />
                
                                  </VStack>
            </Stack>
        </LayoutWithImage>

    );
}

export default PromotionScreen;