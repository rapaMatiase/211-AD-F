import React from "react";
import {
    Button,
    Stack,
    Flex,
} from "native-base";
import LayoutWithBrand from '../../components/LayoutWithBrand';
import MyButton from "../../components/MyButton";

const NeighoboursHomeScreen = ({ navigation }) => {
    return (
        <LayoutWithBrand>
            <Flex h="250" justifyContent="flex-end" alignItems="center">
                <Stack
                    space={5}
                    w="80"
                >
                    <MyButton text="Iniciar sesion" onPress={() => navigation.navigate('NeighboursSingIn')} />
                    <MyButton text="Registrarme" onPress={() => navigation.navigate('NeighboursSignUp')} />
                </Stack>
            </Flex>
        </LayoutWithBrand>
    );
}

export default NeighoboursHomeScreen;