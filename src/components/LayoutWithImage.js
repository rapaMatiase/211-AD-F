import React from "react";
import {
    Box,
    AspectRatio,
    Image,
    Stack,
    ScrollView,
    NativeBaseProvider
} from "native-base";

import ImageNoFound from '../assets/img/no-image.jpg';



const ImageDefualt = () => {
    return (
        <AspectRatio ratio={16 / 9}>
            <Image
                source={ImageNoFound}
                alt="image"
            />
        </AspectRatio>
    )
}


const ImageUser = (props) => {
    return (
        <AspectRatio ratio={16 / 9}>
            <Image
                source={{
                    uri: `${props.image}`,
                }}
                alt="image"
            />
        </AspectRatio>
    );
}


const LayoutWithImage = (props) => {

    return (
        <NativeBaseProvider  >
            <ScrollView style={{backgroundColor : "white"}}>
                <Box>
                    {props.image === undefined ? <ImageDefualt /> : <ImageUser image={props.image} />}
                </Box>
                <Box bg="white"  p="4" roundedTopLeft="xl" roundedTopRight="xl"  mt="-5" >
                    <Stack  space={5}>
                        {props.children}
                    </Stack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default LayoutWithImage;