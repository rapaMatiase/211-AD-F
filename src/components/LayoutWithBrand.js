import React from "react";
import {
    Box,
    AspectRatio,
    Image,
    VStack,
    Heading,
    NativeBaseProvider,
    Center,
    ScrollView
} from "native-base";
import BrandImage from '../assets/img/mobile-logo.png';


const LayoutWithBrand = (props) => {
    return (
        <NativeBaseProvider>
            <ScrollView >
            <Center flex={1} px="3" >
                <VStack space={2} alignItems="center">
                    <Heading>Bienvenido al municipio de</Heading>
                    <Image
                        source={BrandImage}
                        alt="image"
                        size="2xl"
                        resizeMode={"contain"}
                    />
                </VStack>
            </Center>

                <Box style={{flex: 1}}>
                    {props.children}
                </Box>

            </ScrollView>
        </NativeBaseProvider>
    );
}

export default LayoutWithBrand;