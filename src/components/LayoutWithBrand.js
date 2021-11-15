import React from "react";
import {
    Box,
    Image,
    VStack,
    Heading,
    NativeBaseProvider,
    Center,
    Flex,
    AspectRatio,
    Text,
    ScrollView
} from "native-base";
import BrandImage from '../assets/img/LOgoVErdeGrande.jpeg';
import BrandImageTwo from '../assets/img/merlo-green.png';
import BrandImageThree from '../assets/img/mobile-logo.jpg';



const LayoutWithBrand = (props) => {
    return (
        <NativeBaseProvider >
            <Center flex={1} px="3" style={{backgroundColor :"white"}}>
                <ScrollView>
                    <VStack space={4} mt="20" mb="16">
                        <Center >
                            <Image
                                source={BrandImage}
                                alt="image"
                                size="2xl"
                                resizeMode={"contain"}
                                borderRadius={"sm"}
                            />
                        </Center>
                    </VStack>
                    {props.children}
                </ScrollView>
            </Center>
        </NativeBaseProvider>
    );
}

export default LayoutWithBrand;
