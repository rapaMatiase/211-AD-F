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
    VStack,
    HStack,
    Stack,
} from "native-base";

import ImageNoFound from '../assets/img/404.jpg';


const CardWithImage = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch", width: Dimensions.get('window').width }}>
            <Box  p="3">
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
                    <Box>
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                source={ ImageNoFound}
                                alt="image"
                                style={{resizeMode : "contain", width : "100%"}}
                            />
                        </AspectRatio>
                    </Box>
                    <Stack p="4" space={4} >
                        {props.children}
                    </Stack>
                </Box>
            </Box>
        </View>
    );
}

export default CardWithImage;