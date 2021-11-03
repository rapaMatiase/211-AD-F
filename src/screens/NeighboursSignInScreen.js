import React, { useState } from "react";
import {
    NativeBaseProvider,
    Button,
    Text,
    Pressable,
    Alert,
    VStack,
    Center
} from 'native-base';
import LayoutWithBrand from "../components/LayoutWithBrand";
import InputWithControl from "../components/InputWithControl";


const AlertMessage = () => {

    return (
        <Stack space={3} w="100%">
            {statusArray.map((status) => {
                return (
                    <Alert w="100%" status="error">
                        <VStack space={2} flexShrink={1} w="100%">
                            <HStack flexShrink={1} space={2} justifyContent="space-between">
                                <HStack space={2} flexShrink={1}>
                                    <Alert.Icon mt="1" />
                                    <Text fontSize="md" color="coolGray.800">
                                        El nombre de usuario o contraseña son incorrectos
                                    </Text>
                                </HStack>
                                <IconButton
                                    variant="unstyled"
                                    icon={<CloseIcon size="3" color="coolGray.600" />}
                                />
                            </HStack>
                        </VStack>
                    </Alert>
                )
            })}
        </Stack>
    )
}

const NeighboursSingInScreen = () => {

    const [userName, setUserName] = useState("")
    const [errorUserName, setErrorUserName] = useState(false)

    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)

    const [alert, setAlert] = useState(false)

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

                    <Button m={3}> Iniciar sesion </Button>
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