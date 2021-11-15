
import React, { useState } from "react"
import {
    ScrollView,
    VStack,
    Center,
    useTheme,
    Heading,
    FormControl,
    Input,
    Stack,
    WarningOutlineIcon,
    NativeBaseProvider,
    Button,
    Text
} from "native-base";
import LayoutWithBrand from "../components/LayoutWithBrand";
import InputWithControl from "../components/InputWithControl";
import axios from "axios";


const NeighboursSignUpScreen = () => {

    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const [dniError, setDniError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setemailError] = useState(false)

    const [resultado, setResultado] = useState(false)

    const sendData = () => {
        //Aca enviar al backend pero antes hacer la comprobacion.
        console.log(name)
    }


    hanleSubmit = () => {

    if(dni === ""){
        setDniError(true)
    }else{
        setDniError(false)
    }
    
    if (name === ""){
        setNameError(true)
    }else{
        setNameError(false) 
    }
    
    if (lastName === ""){
        setLastNameError(true)
    }else{
        setLastNameError(false) 
    }
    
    if(email === ""){
        setemailError(true)
    }else{
        setemailError(false)
    }

    if(dniError === true || nameError === true || lastNameError === true || emailError === true){

        axios.post('http://10.0.2.2:3000/api/usuario/solicitudRegistro', {
            email : email,
            documento: dni,
            userName : name,
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

    return (
        <NativeBaseProvider>
            <LayoutWithBrand>
                
                <InputWithControl 
                    error={dniError} 
                    setValue={setDni} 
                    title="DNI" 
                    type="text" 
                    placeholder="XXXXXXX" 
                    errorMenssage="Este es el error"
                />

                <InputWithControl 
                    error={nameError} 
                    setValue={setName} 
                    title="Nombre" 
                    type="text" 
                    placeholder="Juan Pablo" 
                    errorMenssage="Debes tener"
                />

                <InputWithControl 
                    error={lastNameError} 
                    setValue={setLastName} 
                    title="Apellido" 
                    type="text" 
                    placeholder="Perez" 
                    errorMenssage="Debes tener"
                />

                <InputWithControl 
                    error={emailError} 
                    setValue={setEmail} 
                    title="Mail" 
                    type="email" 
                    placeholder="perezj@gmail.com" 
                    errorMenssage="Debes tener"
                />
                
                <Button onPress={() => hanleSubmit()} > Enviar</Button>
                {resultado ? <Text> Ya estas registrado, te habilitaran en 15 dias </Text>  : <Text> "" </Text>}
            </LayoutWithBrand>
        </NativeBaseProvider>
    );
}


export default NeighboursSignUpScreen;