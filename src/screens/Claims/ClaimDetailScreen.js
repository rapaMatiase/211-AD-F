import React from "react";
import {
    Heading,
    Text,
    Stack,
    Image,
    HStack,
} from "native-base";

import IconImageNoOk from './../../assets/img/boton-x.png';
import IconImageOk from './../../assets/img/comprobado.png';
import LayoutWithImage from "./../../components/LayoutWithImage";

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


const ClaimDetailScreen = ({ route }) => {

    return (
        <LayoutWithImage
            image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        >
            <Stack space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        #{route.params.item.id}
                    </Heading>
                </Stack>
                <Text fontSize="lg" fontWeight="400" textAlign="center">
                    {route.params.item.description}
                </Text>
                <HStack justifyContent="center">
                    {route.params.state === "PENDIENTE" ? <ClainNoOk /> : <ClainOk />}
                </HStack>
            </Stack>
        </LayoutWithImage>

    );
}

export default ClaimDetailScreen;