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
const TextIcon = ({text, imageIcon}) => {

    return (
        <HStack alignItems="center" space={4}>
            <Image
                size="2xs"
                source={imageIcon}
                alt="Roto"
            />
            <Text
                fontSize="lg"
                fontWeight="600"
            >
                {text}
            </Text>
        </HStack>
    );
}

export default TextIcon;