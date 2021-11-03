import * as React from 'react';
import {
    NativeBaseProvider,
    FlatList,
    Box,
    AddIcon,
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

const ButtomAdd = ({navigation}) => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
                icon={<AddIcon size="4" />}
                onPress={()=> navigation.navigate('NeighboursBoss')}
            />
        </Box>
    );
}


const PromotionListScreen = ({ navigation, route }) => {

    return (
        <NativeBaseProvider>
            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={json}
                style={{ height: "100%" }}
                renderItem={({ item }) => <CardPromotion item={item} showDetail={() => navigation.navigate('Promotion', { item: item })} />}
            />
            {route.params.isLogin ? <ButtomAdd navigation={navigation} /> : null}
        </NativeBaseProvider>
    );
}



export default PromotionListScreen;