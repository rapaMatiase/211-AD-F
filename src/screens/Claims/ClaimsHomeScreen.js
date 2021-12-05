import {
    FlatList,
    VStack
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


const ClaimsHomeScreen = () => {
    return (
        <LayoutWithImage>
            <VStack space={2}>
                <FlatList
                    data={json}
                    renderItem={({ item }) => <CardClaims item={item} key={item.id} />}
                />
            </VStack>
        </LayoutWithImage>
    );
}

export default ClaimsHomeScreen;