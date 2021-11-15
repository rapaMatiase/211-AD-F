import * as React from 'react';
import { Dimensions } from 'react-native'

import {
    Box,
    Heading,
    AspectRatio,
    Pressable,
    Image,
    Text,
    View,
    VStack,
    HStack,
    Stack,
} from "native-base";
import ImageIconFlag from './../assets/img/maps-and-flags.png';
import ImageIconClock from './../assets/img/clock-circular-outline.png';
import ImageIconCalendar from './../assets/img/calendar.png';
import CardWithImage from './CardWithImage';
import TextIcon from "../components/TextIcon";

/* {uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"} */
const CardPromotion = (props) => {
    return (
        <CardWithImage image={props.item.image}>
            <Stack space={2}>
                <Heading size="lg" ml="-1">
                    {props.item.tituloPromocion}
                </Heading>
            </Stack>
            <Text fontSize="lg" fontWeight="400" isTruncated >
                {props.item.descripcion}
            </Text>
            <VStack alignItems="flex-start" pt="5" space={4} justifyContent="space-between">
                <TextIcon text={props.item.direccion} imageIcon={ImageIconFlag} />
                <TextIcon text={`${props.item.desdeDia} a ${props.item.hastaDia}`} imageIcon={ImageIconClock} />
                <TextIcon text={`${props.item.desdeHora} a ${props.item.hastaHora}`} imageIcon={ImageIconCalendar} />
            </VStack>
            <HStack alignItems="center" justifyContent="center">
                <Pressable onPress={() => props.showDetail()}>
                    <Text
                        fontSize="2xl"
                        fontWeight="600"
                        color="primary.700"
                    >
                        Ver detalle
                    </Text>
                </Pressable>
            </HStack>
        </CardWithImage>
    );
}

export default CardPromotion;