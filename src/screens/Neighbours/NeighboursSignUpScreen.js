
import React, { useState } from "react"
import {
    VStack,
    Heading,
    Pressable,
    Text
} from "native-base";
import LayoutWithBrand from "../../components/LayoutWithBrand";
import axios from "axios";
import InputText from "../../components/InputText";
import InputNumber from "../../components/InputNumber";
import InputEmail from "../../components/InputEmail";
import MyButton from "../../components/MyButton";
import Modal from "../../components/Modal";
import AlertMessage from "../../components/AlertMessage";

const NeighboursSignUpScreen = () => {

    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [resultado, setResultado] = useState(false)

    const sendData = () => {
        //Aca enviar al backend pero antes hacer la comprobacion.
        console.log(name)
    }

    const validatorDni = (inputDni) => {
        return inputDni ? true : false
    }

    const validatorName = (inputName) => {
        return inputName ? true : false
    }
    
    const validatorLastName = (inputLastName) => {
        return inputLastName ? true : false
    }

    const validatorEmail = (inputEmail) => {
        return inputEmail ? true : false
    }



    /* hanleSubmit = () => {

        if (dni === "") {
            setDniError(true)
        } else {
            setDniError(false)
        }

        if (name === "") {
            setNameError(true)
        } else {
            setNameError(false)
        }

        if (lastName === "") {
            setLastNameError(true)
        } else {
            setLastNameError(false)
        }

        if (email === "") {
            setemailError(true)
        } else {
            setemailError(false)
        }

        if (dniError === true || nameError === true || lastNameError === true || emailError === true) {

            axios.post('http://10.0.2.2:3000/api/usuario/solicitudRegistro', {
                email: email,
                documento: dni,
                userName: name,
                lastName: lastName
            })
                .then(function (response) {
                    console.log(response.status)
                    if (response.status == "200") {
                        console.log("Registrado")
                        setResultado(true)
                    }
                })
                .catch(function (error) {
                    console.log(error.response.status)

                })
        }
    }
 */
    return (
        <LayoutWithBrand>
            <VStack space={4}>

                <Heading> Registro </Heading>

                <InputNumber
                    setValue={setDni}
                    title="DNI"
                    placeholder="XXXXXXX"
                    errorMenssage="Este es el error"
                    validator={validatorDni}
                />

                <InputText
                    setValue={setName}
                    title="Nombre"
                    placeholder="Juan"
                    errorMenssage="Debe completar este campo"
                    validator={validatorName}
                />

                <InputText
                    setValue={setLastName}
                    title="Apellido"
                    placeholder="Perez"
                    errorMenssage="Debe completar este campo"
                    validator={validatorLastName}
                />

                <InputEmail
                    setValue={setEmail}
                    title="Email"
                    placeholder="jperez@hotmail.com"
                    error="Debes completar este campo"
                    validator={validatorEmail}
                />
                
                <MyButton text="Eviar" onPress={() => hanleSubmit()} />

                <AlertMessage message="No se puedo realizar el evio" show={showAlert} />
            </VStack>
            <Modal 
                title="¡Felicitaciones!" 
                message="Su solicitud a sido registrado con exito. Recibira un email en 15 dias con el resutlado." 
                show={showModal}
            >
                <Pressable onPress={() => console.log("Jodete1")}>
                    <Text fontSize="lg" color="lightBlue.400" fontWeight="bold"> Ver promosiones</Text>
                </Pressable>
                <Pressable onPress={() => console.log("Jodete2")}>
                    <Text fontSize="lg" color="lightBlue.400" fontWeight="bold"> Ir al inicio</Text>
                </Pressable>
            </Modal>
        </LayoutWithBrand>
    );
}


export default NeighboursSignUpScreen;