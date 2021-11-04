import React from "react";
import {
    Heading,
    VStack,
    HStack,
    Image,
    FlatList,
    Text
} from 'native-base';
import IconImageNoOk from './../assets/img/boton-x.png';
import IconImageOk from './../assets/img/comprobado.png';
import LayoutWithImage from "../components/LayoutWithImage";
const ComplaintScreen = () => {





    return (
        <LayoutWithImage>
            <VStack>
                <Heading> Nuemor de reclamo </Heading>
                <Text> Texto del reclamo </Text>
                <HStack space={3} alignItems="center">
                    <Image
                        source={IconImageNoOk}
                        alt="Icon no ok"
                        size="xs"
                    />
                    <Heading size="lg" ml="-1">
                        State
                    </Heading>
                </HStack>
                {/* ACA TIENE QUE IR UN FLAT LIST CON IMAGE PARA MOSTRAR LAS IMAGENES */}

            </VStack>
        </LayoutWithImage>
    );
}

export default ComplaintScreen;