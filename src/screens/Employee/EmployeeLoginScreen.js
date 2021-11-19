import React, { useState } from "react";
import {
    VStack,
} from "native-base";
import LayoutWithBrand from '../../components/LayoutWithBrand';
import InputWithControl from '../../components/InputWithControl';
import MyButton from "../../components/MyButton";


const EmployeeHomeScreen = ({ navigation }) => {

    const [legajo, setLegajo] = useState("")
    const [errorLegajo, setErrorLegajo] = useState(false)

    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)

    return (
        <LayoutWithBrand>
            <VStack space={"lg"}>
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
                <MyButton onPress={() => { navigation.navigate('UsersScreen') }}  text="Entrar" />
            </VStack>
        </LayoutWithBrand>
    );
}

export default EmployeeHomeScreen;