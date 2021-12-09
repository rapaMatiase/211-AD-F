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
const ComplaintDetailScreen = ({route}) => {


    return (
        <LayoutWithImage>
            <VStack space={4}>
                <Heading> #{route.params.item.idDenuncias } </Heading>
                <Text fontSize="xl">
                    {route.params.item.descripcion}
                </Text>

                {/* ACA TEINE QUE IR LA COSA DE IAMGENS */}

                <Center>
                    <HStack space={4}>
                        
                        {route.params.item.estado ? <Image
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
                            {route.params.item.estado || "Sin estado"}
                        </Heading>
                    </HStack>
                </Center>
            </VStack>
        </LayoutWithImage>
    );
}

export default ComplaintDetailScreen;