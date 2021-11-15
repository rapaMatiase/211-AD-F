import React from "react";
import {
    Box,
    Image,
    VStack,
    Heading,
    NativeBaseProvider,
    Center,
    Flex,
    Text,
    ScrollView
} from "native-base";
import BrandImage from '../assets/img/LOgoVErdeGrande.jpeg';


const LayoutWithBrand = (props) => {
    return (
        <NativeBaseProvider>
            <ScrollView flex="1">
                <VStack space={4} mt={16} >
                    <Center>
                        <Heading size="xl">Bienvenido al municipio de</Heading>
                    </Center>
                    <Center bg="primary.500" rounded="md" shadow={3} >
                        <Image
                            source={BrandImage}
                            alt="image"
                            size="2xl"
                            resizeMode={"contain"}
                            borderRadius={"sm"}
                            
                        />
                    </Center>
                    <Center>
                        {props.children}
                    </Center>
                </VStack>

            </ScrollView>
        </NativeBaseProvider>
    );
}

export default LayoutWithBrand;

/*

 <Flex flex={1} w="100%">
                        <Center
                            flex="1"
                            bg="primary.500"
                            _dark={{
                                bg: "primary.400",
                            }}
                            rounded="sm"
                            _text={{
                                color: "warmGray.50",
                                fontWeight: "medium",
                            }}
                        >
                            <Text> Box 2 </Text>
                        </Center>
                        <Center
                            flex="1"
                            bg="secondary.500"
                            _dark={{
                                bg: "secondary.400",
                            }}
                            rounded="sm"
                            _text={{
                                color: "warmGray.50",
                                fontWeight: "medium",
                            }}
                        >
                        <Text> Box 2 </Text>

                            </Center>
                    </Flex>
*/