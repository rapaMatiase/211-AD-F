import React, { useState } from "react";
import {
    Text,
    HStack,

    Image,
    FlatList,
    NativeBaseProvider
} from "native-base";


const ImageItem = ({url}) => {

    return (
        <HStack>
            <Text> {url} </Text>
        <Image
                size="lg"
                resizeMode="cover"
                source={url }
                alt={"Alternate Text "}
            />
            </HStack>
    )
}

const NewPromotionChooseImageScreen = ({navigation, route}) => {

    const NextScreen = () =>{
        navigation.navigate(
            'NeighboursStack', 
            /* {
                screen : 'NewPromotionConfirm', 
                params : {
                    ...route.params,
                }
            } */
        )
    }

    const TakeImage = () =>{
        navigation.navigate('Camara',
        {
            params: { 

            },
        })
    }

    return (
        <NativeBaseProvider >
            <FlatList
                    data={route.params.images}
                    renderItem={({item}) => <ImageItem url={item} /> }
                />            
        </NativeBaseProvider>
    );
}

export default NewPromotionChooseImageScreen;
