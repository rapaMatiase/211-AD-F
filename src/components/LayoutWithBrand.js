import React from "react";
import {
    Box,
    AspectRatio,
    Image,
    VStack,
    Heading,
    NativeBaseProvider,
    Center
} from "native-base";
import BrandImage from '../assets/img/mobile-logo.png';


const LayoutWithBrand = (props) => {
    return (
        <NativeBaseProvider>
           <Center flex={1} px="3">
                      
                            <Image
                                source={BrandImage}
                                alt="image"
                                size="3xl"
                                resizeMode={"contain"}
                            />
                </Center>
              {/*  
              
              <VStack p="4" space={1} justifyContent="center" alignItems="stretch">
                        <Box>
                            {props.children}
                        </Box>
                </VStack> */}
        </NativeBaseProvider>
    );
}

export default LayoutWithBrand;