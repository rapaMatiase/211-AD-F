import React, {useEffect, useState} from "react";
import {
    Heading,
    VStack,
    AddIcon,
    Fab,
    Box,
    FlatList
} from "native-base";
import CardComplaints from './../../components/CardComplaints';
import LayoutWithImage from './../../components/LayoutWithImage';
import LayoutWithImageSimple from './../../components/LayoutWithImageSimple';
import axios from 'axios';

/* 
const json = [
    {state : "Pendiente", title : "#213123", detail : "Sin ningun detalle en especial"},
    {state : "Pendiente", title : "#213123", detail : "Sin ningun detalle en especial"},
    {state : "Pendiente", title : "#213123", detail : "Sin ningun detalle en especial"},

] */

const ButtomAdd = ({ navigation, route }) => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
                icon={<AddIcon size="4" />}
                onPress={() => navigation.navigate(
                    'NewComplaintStack', 
                    { 
                        screen : 'NewComplaintChoose', 
                        params : {...route.params}
                    }
                )}
            />
        </Box>
    );
}

const ComplaintsHomeScreen = ({ navigation, route }) => {

    const [json, setJson] = useState([]); 

     useEffect(() => {
        axios({
            method : "GET",
            url : `http://10.0.2.2:3000/api//denuncia/${route.params.dni}`,
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
        <LayoutWithImageSimple>
            <VStack space={2}>
                <Heading > Tus denuncias</Heading>
                <CardComplaints showState={() => navigation.navigate('Complaint', /* { item: item } */)} />
                <FlatList 
                    data={json}
                    renderItem={({state, title, detail})=> <CardComplaints state={state} title={title} detail={detail} showState={() => navigation.navigate('ComplaintStack', {screen : 'ComplaintDetail', params : {isEmployee : route.isEmployee, item : item}})} />}
                />
            </VStack>
            <ButtomAdd navigation={navigation} route={route} />
        </LayoutWithImageSimple>
    );
}

export default ComplaintsHomeScreen;