import {
    FlatList,
    VStack,
    Fab,
    Box,
    AddIcon
} from "native-base";
import React from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import CardClaims from "../../components/CardClaims";


const json = [
    {
        id: "435342343",
        description: "Este reclamo no tiene ningun sentido alguno, pero tu tienes el derecho de ser estupido.",
        state: "PENDIENTE",

    },
    {
        id: "423123",
        description: "Este reclamo no tiene ningun sentido alguno, pero tu tienes el derecho de ser estupido.",
        state: "FINALIZADO",

    },
    {
        id: "4a",
        description: "Este reclamo no tiene ningun sentido alguno, pero tu tienes el derecho de ser estupido.",
        state: "FINALIZADO",

    }
]

const ButtomAdd = ({navigation, route}) => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
                icon={<AddIcon size="4" />}
                onPress={()=> navigation.navigate('NewClaimStack', {screen : 'NewClaimsChoosePlace', params : {...route.params}})}
            />
        </Box>
    );
}


const ClaimsHomeScreen = ({navigation, route}) => {
    return (
        <LayoutWithImage>
            <VStack space={2}>
                <FlatList
                    data={json}
                    renderItem={({ item }) => <CardClaims item={item} key={item.id} showState={() => navigation.navigate('ClaimStack', {screen : 'ClaimDetail', params : {isEmployee : route.isEmployee, item : item}})} />}
                />
            </VStack>
            <ButtomAdd navigation={navigation} route={route} />
        </LayoutWithImage>
    );
}

export default ClaimsHomeScreen;