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
import ImageIconFlag from './../assets/img/maps-and-flags.png';
import ImageIconClock from './../assets/img/clock-circular-outline.png';
import ImageIconCalendar from './../assets/img/calendar.png';

import TextIcon from "../components/TextIcon";


const CardPromotion = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch", width: Dimensions.get('window').width }}>
            <Box p="3">
                <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
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
                                source={{
                                    uri: props.item.image,
                                }}
                                alt="image"
                            />
                        </AspectRatio>
                    </Box>
                    <Stack p="4" space={4} >
                        <Stack space={2}>
                            <Heading size="lg" ml="-1">
                                {props.item.title}
                            </Heading>
                        </Stack>
                        <Text fontSize="lg" fontWeight="400" isTruncated >
                            {props.item.description}
                        </Text>
                        <VStack alignItems="flex-start" pt="5" space={4} justifyContent="space-between">
                            <TextIcon text={props.item.addres} imageIcon={ImageIconFlag} />
                            <TextIcon text={props.item.days} imageIcon={ImageIconClock} />
                            <TextIcon text={props.item.time} imageIcon={ImageIconCalendar} />
                        </VStack>
                        <HStack alignItems="center" justifyContent="center">
                            <Pressable onPress={() => props.showDetail()}>
                                <Text
                                    fontSize="2xl"
                                    fontWeight="600"
                                    color="primary.700"
                                >
                                    Ver detalle
                                </Text>
                            </Pressable>
                        </HStack>
                    </Stack>
                </Box>
            </Box>
        </View>
    );
}

export default CardPromotion;