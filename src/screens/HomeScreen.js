import React from "react";
import LayoutWithBrand from "../components/LayoutWithBrand";
import {
    VStack,
    Button
} from "native-base";

const HomeScreen = () => {

    return (
        <LayoutWithBrand>
            <Text fontSize="lg" > Biendenido, ACA VA EL NOMBRE </Text>
            <VStack space={3}>
                <Button onPress={() => console.log("RECLAMOS")} > Reclamos </Button>
                <Button onPress={() => console.log("DENUNCIAS")}> Denuncias </Button>
                <Button onPress={() => console.log("PROMOS")}> Promos </Button>
            </VStack>

        </LayoutWithBrand>
    );
}

export default HomeScreen;