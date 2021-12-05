import React from "react";
import {
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
                    <MyButton text="Iniciar sesion" onPress={() => navigation.navigate('NeighboursStack',{screen: 'NeighnoursSingIn'})} />
                    <MyButton text="Registrarme" onPress={() => navigation.navigate('NeighboursStack',{screen: 'NeighnoursSingUp'})} />
                </Stack>
            </Flex>
        </LayoutWithBrand>
    );
}

export default NeighoboursHomeScreen;