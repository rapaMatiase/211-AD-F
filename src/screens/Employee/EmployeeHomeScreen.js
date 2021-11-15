import React, { useState } from "react";
import {
    Button,
    Stack,
    Flex,
    NativeBaseProvider,
} from "native-base";
import LayoutWithBrand from '../../components/LayoutWithBrand';
import InputWithControl from '../../components/InputWithControl';


const EmployeeHomeScreen = ({navigation}) => {

    const [legajo, setLegajo] = useState("")
    const [errorLegajo, setErrorLegajo] = useState(false)

    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)

    return (
        <NativeBaseProvider>
            <LayoutWithBrand>
                <Flex /* height="100%" */ pb="25" align="center" justify="flex-end">
                <InputWithControl
                        error={errorLegajo}
                        setValue={setLegajo}
                        title="Legajo"
                        type="text"
                        placeholder="32424343"
                        errorMenssage="Debe ingresar su legajo"
                    />
                    <InputWithControl
                        error={errorPassword}
                        setValue={setPassword}
                        title="Contraseña"
                        type="text"
                        placeholder="32424343"
                        errorMenssage="Debe ingresar su legajo"
                    />
                    <Button onPress={() => {navigation.navigate('UsersScreen')}} > Entrar </Button>
                </Flex>
            </LayoutWithBrand>
        </NativeBaseProvider>
    );
}

export default EmployeeHomeScreen;