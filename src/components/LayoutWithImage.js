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
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    {props.image === undefined ? <ImageDefualt /> : <ImageUser image={props.image} />}
                </Box>
                <Box bg="white" h="100%" p="3" rounded="xl" mt="-5" >
                    <Stack p="4" space={3}>
                        {props.children}
                    </Stack>
                </Box>
                </ScrollView>
        </NativeBaseProvider>
    );
}

export default LayoutWithImage;