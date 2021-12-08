import React, { useEffect, useState } from "react";
import {
    Text,
    Pressable,
    VStack,
    Center,
} from 'native-base';
import LayoutWithBrand from "../../components/LayoutWithBrand";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import axios from "axios";
import MyButton from "../../components/MyButton";
import AlertMessage from "../../components/AlertMessage";

const NeighboursSingInScreen = ({ navigation }) => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    /* const hanleSubmit = () => {
        navigation.navigate('NeighboursStack', {screen : 'UserHome', params: { isEmployee : false, dni : userName}})
    } */
    hanleSubmit = () => {

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


    const validarUserName = (userName)=>{
        if(userName.length != 0){
            return true
        }else{
            return false
        }
    }

    const validarPassword = (password)=>{
        if(password.length != 0){
            return true
        }else{
            return false
        }
    }

    return (
            <LayoutWithBrand>
                <VStack space={4}>

                    <InputText 
                        setValue={setUserName}
                        title="Nombre de usuario"
                        placeholder="JPerez"
                        errorMenssage="El usuario no es correcto"  
                        validator={validarUserName}
                    />

                    <InputPassword 
                        setValue={setPassword}
                        title="Contraseña"
                        placeholder="No compartas tu constraseña"
                        errorMenssage="Debes ingresar "  
                        validator={validarPassword}
                    />


                    <MyButton text="Iniciar sesion" onPress={() => hanleSubmit()} />
                    
                    <Pressable onPress={() => navigation.navigate('NeighboursStack', {screen : 'NeighboursForgotPassword'})}>
                        <Center>
                            <Text fontSize="lg" color="lightBlue.400" fontWeight="bold"> Recuperar contraseña</Text>
                        </Center>
                    </Pressable>
                    
                    <AlertMessage  
                        message="El usuario o contraseña son incorrectas" 
                        show={showAlert}
                        /> 

                </VStack>
               
            </LayoutWithBrand>
    );
}

export default NeighboursSingInScreen;

