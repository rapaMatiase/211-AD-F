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
import ImageIconFlag from './../assets/img/maps-and-flags.png';
import ImageIconClock from './../assets/img/clock-circular-outline.png';
import ImageIconCalendar from './../assets/img/calendar.png';

import TextIcon from "../components/TextIcon";

import LayoutWithImage from "../components/LayoutWithImage";

const PromotionScreen = ({ router }) => {

    return (
        <LayoutWithImage
            image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        >
            <Stack space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        The Garden City
                    </Heading>
                </Stack>
                <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                </Text>
                <VStack alignItems="flex-start" pt="5" space={4} justifyContent="space-between">
                    <TextIcon text="Direccion" imageIcon={ImageIconFlag}/>
                    <TextIcon text="Horario" imageIcon={ImageIconClock}/>
                    <TextIcon text="Dias" imageIcon={ImageIconCalendar}/>
                </VStack>
            </Stack>
        </LayoutWithImage>

    );
}

export default PromotionScreen;