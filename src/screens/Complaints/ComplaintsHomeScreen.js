import React from "react";
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
import CardClaims from "../../components/CardClaims";

const json = [
    {state : "Pendiente", title : "#213123", detail : "Sin ningun detalle en especial"},
    {state : "Pendiente", title : "#213123", detail : "Sin ningun detalle en especial"},
    {state : "Pendiente", title : "#213123", detail : "Sin ningun detalle en especial"},

]

const ButtomAdd = ({ navigation }) => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
                icon={<AddIcon size="4" />}
                onPress={() => navigation.navigate('NewComplaint')}
            />
        </Box>
    );
}

const ComplaintsHomeScreen = ({ navigation }) => {


    return (
        <LayoutWithImage >
            <VStack space={2}>
                <Heading > Tus denuncias</Heading>
                <CardComplaints showState={() => navigation.navigate('Complaint', /* { item: item } */)} />
                <FlatList 
                    data={json}
                    renderItem={({state, title, detail})=> <CardClaims state={state} title={title} detail={detail} />}
                />
            </VStack>
            <ButtomAdd navigation={navigation} />
        </LayoutWithImage>
    );
}

export default ComplaintsHomeScreen;