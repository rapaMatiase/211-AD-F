
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
} from "native-base"
import LayoutWithBrand from "../components/LayoutWithBrand";

const NeighboursSignUpScreen = () => {

    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const sendData = () => {
        //Aca enviar al backend
        console.log(name)
    }

    return (
        <NativeBaseProvider>
            <LayoutWithBrand>
                <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>DNI</FormControl.Label>
                        <Input type="number" placeholder="DNI" onChangeText={(input) => setDni(input)} />
                        <FormControl.HelperText>
                            Must be atleast 6 characters.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                    </Stack>
                    <Stack mx="4">
                        <FormControl.Label>Nombre</FormControl.Label>
                        <Input type="text" placeholder="Juan pablo" onChangeText={(input) => setName(input)} />
                        <FormControl.HelperText>
                            Must be atleast 6 characters.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                    </Stack>


                    <Stack mx="4">
                        <FormControl.Label>Nombre</FormControl.Label>
                        <Input type="text" placeholder="Perez" onChangeText={(input) => setPassword(input)} />
                        <FormControl.HelperText>
                            Must be atleast 6 characters.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                    </Stack>
                    <Stack mx="4">
                        <FormControl.Label>email</FormControl.Label>
                        <Input type="email" placeholder="Perezj@gmail.com" onChangeText={(input) => setEmail(input)} />
                        <FormControl.HelperText>
                            Must be atleast 6 characters.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                    </Stack>
                    <Button onPress={() => sendData()}> Enviar </Button>
                </FormControl>
            </LayoutWithBrand>
        </NativeBaseProvider>
    );
}


export default NeighboursSignUpScreen;