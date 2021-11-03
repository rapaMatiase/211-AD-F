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

import LayoutWithImage from "../components/LayoutWithImage";

const PromotionScreen = ({ navigation }) => {

    return (
        <LayoutWithImage
            image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        >
            <Stack space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        The Garden City
                    </Heading>
                </Stack>
                <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                </Text>
                <VStack alignItems="flex-start" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                        <Text
                            fontSize="lg"
                            fontWeight="600"
                        >
                            Direccion
                        </Text>
                    </HStack>
                    <HStack alignItems="center">
                        <Text
                            fontSize="lg"
                            fontWeight="600"
                        >
                            Dias
                        </Text>
                    </HStack>
                    <HStack alignItems="center">
                        <Text
                            fontSize="lg"
                            fontWeight="600"
                        >
                            Horario
                        </Text>
                    </HStack>
                </VStack>
                <HStack alignItems="center" justifyContent="center">
                    <Pressable onPress={() => console.log("hola")}>
                        <Text
                            fontSize="lg"
                            fontWeight="600"
                        >
                            Detalle
                        </Text>
                    </Pressable>
                </HStack>
            </Stack>
        </LayoutWithImage>

    );
}

export default PromotionScreen;