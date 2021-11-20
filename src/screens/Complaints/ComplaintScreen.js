import React from "react";
import {
    Heading,
    VStack,
    HStack,
    Image,
    FlatList,
    Text,
    Center
} from 'native-base';
import IconImageNoOk from './../../assets/img/boton-x.png';
import IconImageOk from './../../assets/img/comprobado.png';
import LayoutWithImage from "../../components/LayoutWithImage";
const ComplaintScreen = (props) => {


    return (
        <LayoutWithImage>
            <VStack space={4}>
                <Heading> #{props.id || "Sin numero"} </Heading>
                <Text fontSize="xl">
                    {props.text || "Sin detalle del reclamo"}
                </Text>

                {/* ACA TEINE QUE IR LA COSA DE IAMGENS */}

                <Center>
                    <HStack space={4}>
                        
                        {props.state ? <Image
                            source={IconImageNoOk}
                            alt="Icon no ok"
                            size="xs"
                        />
                        :
                        <Image
                            source={IconImageOk}
                            alt="Icon no ok"
                            size="xs"
                        />}

                        <Heading size="lg" ml="-1">
                            {props.state || "Sin estado"}
                        </Heading>
                    </HStack>
                </Center>
            </VStack>
        </LayoutWithImage>
    );
}

export default ComplaintScreen;