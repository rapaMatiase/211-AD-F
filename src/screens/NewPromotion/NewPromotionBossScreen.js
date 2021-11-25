import React, { useState } from "react";
import LayoutWithImage from "./../../components/LayoutWithImage";
import {
    VStack,
    Text,
    Button,
    Heading
} from "native-base";
import InputWithControl from "./../../components/InputWithControl";
import MunicipioEdificioImage from './../../assets/img/EdificioMunicipioDeMerlo.jpeg';
import InputNumber from './../../components/InputNumber';


const NewPromotionScreen = ({ navigation }) => {


    const [businessName, setBusinessName] = useState("")
    const [errorBusinessName, setErrorBusinessName] = useState(false)

    const [telefono, setTelefono] = useState("")
    const [errorTefono, setErrorTelefono] = useState(false)

    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(false)

    const [dni, setDni] = useState("")
    const [errorDni, setErrorDni] = useState(false)

    const [name, setName] = useState("")
    const [errorName, setErrorName] = useState(false)

    const [lastName, setLastName] = useState("")
    const [errorLastName, setErrorLastName] = useState(false)

    const [adress, setAdress] = useState("")
    const [errorAdress, setErrorAdress] = useState(false)


    const NextScreen = () => {
        navigation.navigate(
            'NeighboursStack',
            {
                screen: 'NewPromotionServicioProfecional',
                params: {
                    businessName,
                    name,
                    lastName,
                    adress,
                    telefono,
                    dni,
                    email,
                }
            }
        )
    }

    const validatorDni = (input) => {
        return input.lenght != 0 ? false : true
    }

    const validatorTelefono = (input) => {
        return input.lenght != 0 ? false : true
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            <Heading size="lg"> Datos del local </Heading>
            <Text> Necitamos tus datos para indentificarte y habilitar la misma en 15 dias. </Text>
            <VStack space={4}>


                <InputWithControl
                    error={errorBusinessName}
                    setValue={setBusinessName}
                    title="Nombre del local"
                    type="text"
                    placeholder="Pepes's"
                    errorMenssage="El nombre es obligatorio"
                />

                <InputNumber
                    setValue={setDni}
                    title="DNI"
                    placeholder="XXXXXXXX"
                    validator={validatorDni}
                    errorMenssage="Este campo es obligatorio"
                />

                <InputNumber
                    setValue={setTelefono}
                    title="Telefono"
                    placeholder="54 xxxxxxxxx"
                    validator={validatorTelefono}
                    errorMenssage="Este campo es obligatorio"
                />

                <InputWithControl
                    error={errorEmail}
                    setValue={setEmail}
                    title="Email"
                    type="text"
                    placeholder="Pepe"
                    errorMenssage="El nombre es obligatorio"
                />

                <InputWithControl
                    error={errorName}
                    setValue={setName}
                    title="Nombre del dueño"
                    type="text"
                    placeholder="Pepe"
                    errorMenssage="El nombre es obligatorio"
                />

                <InputWithControl
                    error={errorLastName}
                    setValue={setLastName}
                    title="Nombre del local"
                    type="text"
                    placeholder="Italiano"
                    errorMenssage="El apellido es obligatorio"
                />
                <InputWithControl
                    error={errorAdress}
                    setValue={setAdress}
                    title="Direccion del local"
                    type="text"
                    placeholder="Avenia siempre viva"
                    errorMenssage="La direccion es obligatorio"
                />
         
            <Button mt="4" onPress={NextScreen}> Continuar </Button>
            </VStack>

        </LayoutWithImage>
    );
}

export default NewPromotionScreen;