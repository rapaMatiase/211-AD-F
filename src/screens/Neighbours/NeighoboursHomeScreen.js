import React from "react";
import {
    Button,
    Stack,
    Flex,
} from "native-base";
import LayoutWithBrand from '../../components/LayoutWithBrand';


const NeighoboursHomeScreen = ({ navigation }) => {
    return (
        <LayoutWithBrand>
            <Flex h="250" justifyContent="flex-end">
                <Stack
                    space={5}
                    w="80"
                >
                    <Button size="lg" colorScheme="tertiary" onPress={() => navigation.navigate('NeighboursSingIn')}> Iniciar sesion</Button>
                    <Button size="lg" colorScheme="tertiary" onPress={() => navigation.navigate('NeighboursSignUp')}> Registrarme </Button>
                </Stack>
            </Flex>
        </LayoutWithBrand>
    );
}

export default NeighoboursHomeScreen;