import * as React from 'react';

import {
    Heading,
    Pressable,
    Image,
    Text,
    Divider,
    HStack,
} from "native-base";
import Card from './Card';
import IconImageNoOk from './../assets/img/boton-x.png';
import IconImageOk from './../assets/img/comprobado.png';


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
                {props.state === "PENDIENTE" ? <ClainNoOk /> : <ClainOk />}
                <Heading size="lg" ml="-1">
                    #{props.item.idReclamo[0]} {/* No se porque llega como una lista el id... */}
                </Heading>
            </HStack>
            <Divider bg="gray.400" thickness="3" />
            <Text fontSize="lg" fontWeight="400" isTruncated >
                {props.item.descripcion}
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