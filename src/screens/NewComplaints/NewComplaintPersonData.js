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
import InputText from "../../components/InputText";

const NewComplaintsPersonDataScreen = ({ navigation, route }) => {


    const [nameOfTheAccused, setNameOfTheAccused] = useState("");
    const [lastnameOfTheAccused, setLastnameOfTheAccused] = useState("");
    const [buisnessNameOfTheAccused, setBuisnessNameOfTheAccused] = useState("");
    const [adressBuisnessOfTheAccused, setAdressBuisnessOfTheAccused] = useState("");
    const [dniOfTheAccused, setDniOfTheAccused] = useState("");

    const NextScreen = () => {
        navigation.navigate(
            'NewComplaintStack',
            {
                screen: 'NewComplaintsConfirm',
                params: {
                    nameOfTheAccused,
                    lastnameOfTheAccused,
                    buisnessNameOfTheAccused,
                    adressBuisnessOfTheAccused,
                    dniOfTheAccused,
                    ...route
                }
            }
        )
    }

    const validatorName = (input) => {
        return input.lenght != 0 ? false : true
    }

    const validatorLastname = (input) => {
        return input.lenght != 0 ? false : true
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            <Heading size="lg"> Datos del denunciado</Heading>
            <Text> Necitamos tus datos para indentificarte a la persona a denunciada. </Text>
            <VStack space={4}>


                <InputText
                    title="Nombre"
                    placeholder="Nombre del denunciado"
                    errorMenssge="Debe completar este campo"
                    setValue={setNameOfTheAccused}
                    validator={validatorName}
                />

                <InputText
                    title="Apellido"
                    placeholder="Apellido del denunciado"
                    errorMenssge="Debe completar este campo"
                    setValue={setLastnameOfTheAccused}
                    validator={validatorLastname}
                />

                <InputText
                    title="Nombre del local a denunciar"
                    placeholder="Pepes"
                    errorMenssge="Debe completar este campo"
                    setValue={setBuisnessNameOfTheAccused}
                    validator={validatorLastname}
                />

                <InputText
                    title="Direccion del local"
                    placeholder="Av teniente 2223"
                    errorMenssge="Debe completar este campo"
                    setValue={setAdressBuisnessOfTheAccused}
                    validator={validatorLastname}
                />

                <InputNumber
                    title="Dni"
                    placeholder="30000040"
                    errorMenssge="Debe completar este campo"
                    setValue={setDniOfTheAccused}
                    validator={validatorLastname}
                />

                <Button mt="4" onPress={NextScreen}> Continuar </Button>
            </VStack>

        </LayoutWithImage>
    );
}

export default NewComplaintsPersonDataScreen;