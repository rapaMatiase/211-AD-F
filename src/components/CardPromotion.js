import * as React from 'react';

import {
    Box,
    Heading,
    AspectRatio,
    Pressable,
    Image,
    Text,
    Center,
    VStack,
    HStack,
    Stack,
    NativeBaseProvider,
} from "native-base";

const CardPromotion = () => {


    return (
        <Box p="3">
            <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: "gray.50",
                }}
            >
                <Box>
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            source={{
                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                            }}
                            alt="image"
                        />
                    </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            The Garden City
                        </Heading>
                    </Stack>
                    <Text fontWeight="400" isTruncated >
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
                        <Pressable onPress={()=> console.log("hola")}>
                            <Text
                                fontSize="lg"
                                fontWeight="600"
                            >
                                Detalle
                            </Text>
                        </Pressable>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
}

export default CardPromotion;