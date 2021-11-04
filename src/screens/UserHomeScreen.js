import React from "react";
import LayoutWithBrand from "../components/LayoutWithBrand";
import {
    VStack,
    Button,
    Flex,
    Heading
} from "native-base";
import { Text, View } from "react-native";


const UserHomeScreen = ({navigation}) => {

    return (
        <LayoutWithBrand>
            <Flex justifyContent="flex-end" p="3">
                <VStack space={3}>
                    <Heading fontSize="lg"  > !Hola, ACA VA EL NOMBRE¡ </Heading>

                    <Button onPress={() => console.log("DENUNCIAS")} > Reclamos </Button>
                    <Button onPress={() => navigation.navigate('ComplaintsHome')}> Denuncias </Button>
                    <Button onPress={() => navigation.navigate('PromotionList', {isLogin : true})}> Promos </Button>
                    <Heading fontSize="lg" pb="4" > Notificaciones </Heading>

                </VStack>
            </Flex>
        </LayoutWithBrand>
    );
}

export default UserHomeScreen;