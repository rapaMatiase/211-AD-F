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


import TextIcon from "./TextIcon";


const CardClaims = (props) => {

    return (
        <View  >
            <Box p="2">
                <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.900"
                    shadow={5} 
                    borderWidth="1"
                    _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700",
                    }}
                    _web={{
                        shadow: 6,
                        borderWidth: 0,
                    }}
                    _light={{
                        backgroundColor: "gray.50",
                    }}
                >
                    <Stack p="4" space={4}>
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
                        <Divider  bg="gray.400" thickness="3" />
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
                    </Stack>
                </Box>
            </Box>
        </View>
    );
}

export default CardClaims;