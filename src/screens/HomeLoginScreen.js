import React from "react";
import LayoutWithBrand from "../components/LayoutWithBrand";
import {
    VStack,
    Button
} from "native-base";
import {  Text, View } from "react-native";


const HomeScreen = () => {

    return (
        <LayoutWithBrand>
            <Text fontSize="lg" > Biendenido, ACA VA EL NOMBRE </Text>
            <VStack space={3}>
                <Button onPress={() => console.log("DENUNCIAS")} > Reclamos </Button>
                <Button onPress={() => console.log("DENUNCIAS")}> Denuncias </Button>
                <Button onPress={() => console.log("PROMOS")}> Promos </Button>
            </VStack>

        </LayoutWithBrand>
    );
}

export default HomeScreen;