import { 
    FlatList, 
    Heading, 
    HStack, 
    VStack, 
    Image,
    Pressable 
} from "native-base";
import React from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import CardClaims from "../../components/CardClaims";
import SearchIcon from '../../assets/img/search.png';


const json = [
    {
        id : "435342343",
        description : "Este reclamo no tiene ningun sentido alguno, pero tu tienes el derecho de ser estupido.",
        state : "PENDIENTE",

    },
    {
        id : "423123",
        description : "Este reclamo no tiene ningun sentido alguno, pero tu tienes el derecho de ser estupido.",
        state : "FINALIZADO",
        
    },
    {
        id : "4a",
        description : "Este reclamo no tiene ningun sentido alguno, pero tu tienes el derecho de ser estupido.",
        state : "FINALIZADO",
        
    }
]


const ClaimsHomeScreen = () => {
    return (
        <LayoutWithImage>
            <VStack space={2}>
                <HStack justifyContent="space-between">
                    <Heading size="xl"> Reclamos </Heading>      
                    <Pressable onPress={()=> console.log("Filtrar jaja")}>
                        <Image
                            source={SearchIcon}
                            alt="image"
                            size="xs"
                            resizeMode={"contain"}
                        />
                    </Pressable>
                </HStack>
                <VStack space={2}>
                    <FlatList 
                        data={json}
                        renderItem={({item}) => <CardClaims item={item} key={item.id} />}
                    />
                </VStack>
            </VStack>
        </LayoutWithImage>
    );
}

export default ClaimsHomeScreen;