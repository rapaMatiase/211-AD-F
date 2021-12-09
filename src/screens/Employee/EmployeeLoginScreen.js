import React, { useState } from "react";
import {
    VStack,
} from "native-base";
import LayoutWithBrand from '../../components/LayoutWithBrand';
import InputNumber from "../../components/InputNumber";
import InputPassword from "../../components/InputPassword";
import MyButton from "../../components/MyButton";
import AlertMessage from "../../components/AlertMessage";
import axios from "axios";


const EmployeeLoginScreen = ({ navigation }) => {

    const [legajo, setLegajo] = useState("")
    const [password, setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    hanleSubmit = () => {

        const user = {
            documento: legajo,
            password: password
        };

        axios.post('http://10.0.2.2:3000/api/usuario/login', {
            legajo: legajo,
            password: password
        })
            .then(function (response) {
                console.log(response.status)
                if (response.status == "200") {
                    console.log("Estas logueado")
                    navigation.navigate('NeighboursStack', {screen : 'UserHome', params: { isEmployee : false, dni : userName}})
                }
            })
            .catch(function (error) {
                console.log(error.response.status)
                if (error.response.status === "401") {
                    console.log("El usuario es desconocido")
                    setAlert(true)
                }
                setAlert(true)
            })

    }



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
                <MyButton onPress={() => { navigation.navigate('EmployeeStack', {screen : 'UserHome', params : {isEmployee : true }}) }} text="Entrar" />
                <AlertMessage message="El usuario ingresado no es valido" show={showAlert} />
            </VStack>
        </LayoutWithBrand>
    );
}

export default EmployeeLoginScreen;