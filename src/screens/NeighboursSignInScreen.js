import React, { useEffect, useState } from "react";
import {
    NativeBaseProvider,
    Button,
    Text,
    Pressable,
    Alert,
    VStack,
    Center,
    HStack,

} from 'native-base';
import LayoutWithBrand from "../components/LayoutWithBrand";
import InputWithControl from "../components/InputWithControl";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

const AlertMessage = () => {


    return (
        <Center>
            <Alert w="80%" m="1" status="error">
                <VStack space={2} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} justifyContent="space-between">
                        <HStack space={2} flexShrink={1}>
                            <Alert.Icon mt="1" />
                            <Text fontSize="md" textAlign="center" color="coolGray.800">
                                El usuario no existe.
                            </Text>
                        </HStack>
                        {/* <IconButton
                                    variant="unstyled"
                                    icon={<CloseIcon size="3" color="coolGray.600" />}
                                /> */}
                    </HStack>
                </VStack>
            </Alert>
        </Center>
    )

}

const NeighboursSingInScreen = ({ navigation }) => {

    const [userName, setUserName] = useState("")
    const [errorUserName, setErrorUserName] = useState(false)

    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)

    const [alert, setAlert] = useState(false)

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

    return (
        <NativeBaseProvider>
            <LayoutWithBrand>
                <VStack space={3}>

                    <InputWithControl
                        error={errorUserName}
                        setValue={setUserName}
                        title="Nombre de usuario"
                        type="text"
                        placeholder="JPerez"
                        errorMenssage="Debes tener"
                    />

                    <InputWithControl
                        error={errorPassword}
                        setValue={setPassword}
                        title="Contraseña"
                        type="password"
                        placeholder="No compartas tu constraseña"
                        errorMenssage="Debes tener"
                    />

                    {/*   <Button m={3} onPress={() =>  navigation.navigate('NeighboursStack', {screen : 'UserHome'})}> Iniciar sesion </Button> */}
                    <Button m={3} onPress={() => hanleSubmit()}> Iniciar sesion </Button>


                    <Pressable onPress={() => console.log("Jodete")}>
                        <Center>
                            <Text fontSize="lg"> Recuperar contraseña</Text>
                        </Center>
                    </Pressable>


                </VStack>
                {alert ? <AlertMessage /> : ""}r
            </LayoutWithBrand>
        </NativeBaseProvider>
    );
}

export default NeighboursSingInScreen;