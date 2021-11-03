import * as React from 'react';
import { Dimensions } from 'react-native';
import AddIcon from './../assets/svg/add.svg';
import {
    NativeBaseProvider,
    Text,
    FlatList,
    Box,
    Icon,
    ScrollView,
    View,
    Fab
} from "native-base";
import CardPromotion from '../components/CardPromotion';

const json = [
    {
        title: "La buena mesa de oscar",
        description: "Un lugar para comer en familia y difrustra todos juntos de una buena comida",
        addres: "Av. Que te importa 2233",
        days: "Lunes, Martes, y Miercoles",
        time: "8 a 10 am",
        image: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
    },
    {
        title: "2La buena mesa de oscar",
        description: "Un lugar para comer en familia y difrustra todos juntos de una buena comida",
        addres: "Av. Que te importa 2233",
        days: "Lunes, Martes, y Miercoles",
        time: "8 a 10 am",
        image: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
    },
    {
        title: "3La buena mesa de oscar",
        description: "Un lugar para comer en familia y difrustra todos juntos de una buena comida",
        addres: "Av. Que te importa 2233",
        days: "Lunes, Martes, y Miercoles",
        time: "8 a 10 am",
        image: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
    }
]

const ButtomAdd = () => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
            />
        </Box>
    );
}
                /* icon={<Icon color="white" as={<AddIcon/>} size="sm" />} */


const PromotionListScreen = ({ navigation }) => {

    return (
        <NativeBaseProvider>
            <FlatList 
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={json}
                style={{height: "100%"}}
                renderItem={({item}) => <CardPromotion item={item} showDetail={() => navigation.navigate('Promotion', {item : item})} />}
            />
            <ButtomAdd />
        </NativeBaseProvider>
    );
}
 


export default PromotionListScreen;