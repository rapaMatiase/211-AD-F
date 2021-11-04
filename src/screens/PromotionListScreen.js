import React, {useState, useEffect} from 'react';
import {
    NativeBaseProvider,
    FlatList,
    Box,
    AddIcon,
    Fab
} from "native-base";
import CardPromotion from '../components/CardPromotion';
import ImageNoFound from '../assets/img/no-image.jpg';

import axios from 'axios';

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

    const [json, setJson] = useState([]);

    useEffect(() => {
        axios({
            method : "GET",
            url : 'http://10.0.2.2:3000/api/promocion',
            responseType: "json"
        })
        .then( function (response){
            console.log(response.data)
            setJson(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [setJson]);

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