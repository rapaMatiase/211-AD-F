import React, { useState } from "react";
import {
    VStack,
} from "native-base";
import LayoutWithBrand from '../../components/LayoutWithBrand';
import InputNumber from "../../components/InputNumber";
import InputPassword from "../../components/InputPassword";
import MyButton from "../../components/MyButton";
import AlertMessage from "../../components/AlertMessage";

const EmployeeLoginScreen = ({ navigation }) => {

    const [legajo, setLegajo] = useState("")
    const [password, setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    return (
        <LayoutWithBrand>
            <VStack space={"lg"}>
                <InputNumber
                    setValue={setLegajo}
                    title="Legajo"
                    placeholder="32424343"
                    errorMenssage="Debe ingresar su legajo"
                />
                <InputPassword
                    title="Contraseña"
                    setValue={setPassword}
                    placeholder="32424343"
                    errorMenssage="Debe ingresar su legajo"
                />


                <MyButton onPress={() => { navigation.navigate('UsersScreen') }} text="Entrar" />
                <AlertMessage message="El usuario ingresado no es valido" show={showAlert} />
            </VStack>
        </LayoutWithBrand>
    );
}

export default EmployeeLoginScreen;