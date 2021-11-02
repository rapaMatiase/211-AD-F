import React from "react";
import {
    Button,
    Stack,
    Flex,
    NativeBaseProvider,
} from "native-base";
import LayoutWithBrand from '../components/LayoutWithBrand';

const ButtonGrupNeighbours = () => {
    return (
        <Stack

            direction={{
                base: "column",
                md: "row",
            }}
            space={5}
            mx={{
                base: "auto",
                md: "0",
            }}
            w="80"
        >
            <Button size="lg" colorScheme="tertiary" onPress={() => console.log('hello world1')}> Iniciar sesion</Button>
            <Button size="lg" colorScheme="tertiary" onPress={() => console.log('hello world')}> Registrarme </Button>
        </Stack>
    );
}

const NeighnoursHomeScreen = () => {


    return (
        <NativeBaseProvider>
            <LayoutWithBrand>
                <Flex height="100%" pb="25" align="center" justify="flex-end">
                    <ButtonGrupNeighbours />
                </Flex>
            </LayoutWithBrand>
        </NativeBaseProvider>
    );
}

export default NeighnoursHomeScreen;