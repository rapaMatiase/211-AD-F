import * as React from 'react';

import {
    Box,
    Heading,
    Pressable,
    Image,
    Text,
    View,
    Divider,
    HStack,
    Stack,
} from "native-base";
import Card from './Card';
import IconImageNoOk from './../assets/img/boton-x.png';
import IconImageOk from './../assets/img/comprobado.png';


import TextIcon from "./TextIcon";


const ClainNoOk = () => {
    return (
        <Image
            source={IconImageNoOk}
            alt="Icon no ok"
            size="xs"
        />
    );
}


const ClainOk = () => {
    return (
        <Image
            source={IconImageOk}
            alt="Icon no ok"
            size="xs"
        />
    );
}

const CardClaims = (props) => {

    return (
        <Card>
            <HStack space={3} alignItems="center">
                {props.item.state === "PENDIENTE" ? <ClainNoOk /> : <ClainOk />}
                <Heading size="lg" ml="-1">
                    #{props.item.id}
                </Heading>
            </HStack>
            <Divider bg="gray.400" thickness="3" />
            <Text fontSize="lg" fontWeight="400" isTruncated >
                {props.item.description}
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

export default CardClaims;