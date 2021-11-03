
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
    Button
} from "native-base";
import LayoutWithBrand from "../components/LayoutWithBrand";
import InputWithControl from "../components/InputWithControl";



const NeighboursSignUpScreen = () => {

    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const [dniError, setDniError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setemailError] = useState(false)


    const sendData = () => {
        //Aca enviar al backend pero antes hacer la comprobacion.
        console.log(name)
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
                
                
            </LayoutWithBrand>
        </NativeBaseProvider>
    );
}


export default NeighboursSignUpScreen;