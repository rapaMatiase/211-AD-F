import React from "react";
import LayoutWithImage from './../components/LayoutWithImage';
import {
    Heading,
    VStack,
    Center,
    AddIcon,
    Fab,
    Box
} from "native-base";
import CardComplaints from './../components/CardComplaints';



const ButtomAdd = ({navigation}) => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
                icon={<AddIcon size="4" />}
                onPress={()=> navigation.navigate('NewComplaint')}
            />
        </Box>
    );
}

const ComplaintsHomeScreen = ({navigation}) => {


    return (
        <LayoutWithImage>
            <Center>
                <VStack space={2} p="2">
                    <Heading > Tus denuncias</Heading>
                    <CardComplaints showState={() => navigation.navigate('Complaint', /* { item: item } */)}  />
                    <CardComplaints  />
                    <CardComplaints  />
                    <CardComplaints  />

                </VStack>
            </Center>
            <ButtomAdd navigation={navigation} />
        </LayoutWithImage>
    );
}

export default ComplaintsHomeScreen;