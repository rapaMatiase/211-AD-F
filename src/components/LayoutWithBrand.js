import React from "react";
import {
    Image,
    VStack,
    NativeBaseProvider,
    Center,
    ScrollView
} from "native-base";
import BrandImage from '../assets/img/LOgoVErdeGrande.jpeg';


const LayoutWithBrand = (props) => {
    return (
        <NativeBaseProvider style={{backgroundColor :"white"}} >
                <ScrollView px={3} mb="12">
                    <VStack space={4} mt="12" mb="12">
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
        </NativeBaseProvider>
    );
}

export default LayoutWithBrand;
