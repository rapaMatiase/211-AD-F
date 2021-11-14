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
    Divider,
    VStack,
    HStack,
    Stack,
} from "native-base";
import IconImageNoOk from './../assets/img/boton-x.png';
import IconImageOk from './../assets/img/comprobado.png';
import Card from './Card';

import TextIcon from "./TextIcon";


const CardPromotion = (props) => {

    return (
        <Card>
            <HStack space={3} alignItems="center">
                <Image
                    source={IconImageNoOk}
                    alt="Icon no ok"
                    size="xs"
                />
                <Heading size="lg" ml="-1">
                    Titulo
                </Heading>
            </HStack>
            <Divider bg="gray.400" thickness="3" />
            <Text fontSize="lg" fontWeight="400" isTruncated >
                La descripcion
            </Text>
            <HStack alignItems="center" justifyContent="center">
                <Pressable onPress={() => props.showState()}>
                    <Text
                        fontSize="2xl"
                        fontWeight="600"
                        color="primary.700"
                    >
                        Ver estado
                    </Text>
                </Pressable>
            </HStack>
        </Card>

    );
}

export default CardPromotion;