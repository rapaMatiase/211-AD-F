import React from "react";
import {
    Button,
    Stack,
    Flex,
    NativeBaseProvider,
} from "native-base";
import LayoutWithBrand from '../components/LayoutWithBrand';

const ButtonGrupNeighbours = ({navigation}) => {
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
            <Button size="lg" colorScheme="tertiary" onPress={() => navigation.navigate('UsersScreen')}> Iniciar sesion</Button>
            <Button size="lg" colorScheme="tertiary" onPress={() => console.log('hello world')}> Registrarme </Button>
        </Stack>
    );
}

const NeighoboursHomeScreen = ({navigation}) => {


    return (
        <NativeBaseProvider>
            <LayoutWithBrand>
                <Flex height="100%" pb="25" align="center" justify="flex-end">
                    <ButtonGrupNeighbours navigation={navigation} />
                </Flex>
            </LayoutWithBrand>
        </NativeBaseProvider>
    );
}

export default NeighoboursHomeScreen;