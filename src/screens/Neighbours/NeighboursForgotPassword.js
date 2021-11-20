import React, { useEffect, useState } from "react";
import {
    VStack,
    Text,
    Pressable,
    Center
} from 'native-base';
import LayoutWithBrand from "../../components/LayoutWithBrand";
import InputText from "../../components/InputText";
import axios from "axios";
import MyButton from "../../components/MyButton";
import Modal from "../../components/Modal";
const NeighboursForgotPassword = ({ navigation }) => {

    const [userEmail, setUserEmail] = useState("")
    const [show, setShow] = useState(false)

    /*     hanleSubmit = () => {
    
            const user = {
                documento: userName,
                password: password
            };
    
            axios.post('http://10.0.2.2:3000/api/usuario/login', {
                documento: userName,
                password: password
            })
                .then(function (response) {
                    console.log(response.status)
                    if (response.status == "200") {
                        console.log("Estas logueado")
                        navigation.navigate('NeighboursStack', {screen : 'UserHome'})
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
     */

    const validarEmail = (userEmail) => {
        if (userEmail.length != 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <LayoutWithBrand>
            <VStack space={4}>
                <InputText
                    setValue={setUserEmail}
                    title="Email"
                    placeholder="JPerez@gmail.com"
                    errorMenssage="Debe completar el campo"
                    validator={validarEmail}
                />

                <MyButton text="Recuperar contraseña" onPress={() => { setShow(true) }} />
            </VStack>
            <Modal show={show} title="Email enviado" message="Se enviara un mail a la cuante de email ingresada si es que esta pertenece a un vecino del municipio que este habilitado. No olvides ver la casilla de Span." >
                <Pressable onPress={() => navigation.navigate('InvitedHome')}>
                    <Center>
                        <Text fontSize="lg" color="lightBlue.400" fontWeight="bold"> Ir al inicio</Text>
                    </Center>
                </Pressable>
            </Modal>
        </LayoutWithBrand>
    );
}

export default NeighboursForgotPassword;

