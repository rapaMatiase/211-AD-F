import React, { useState } from "react";
import LayoutWithImage from "../components/LayoutWithImage";
import {
    VStack,
    Text,
    Button
} from "native-base";
import InputWithControl from "../components/InputWithControl";
import MunicipioEdificioImage from './../assets/img/EdificioMunicipioDeMerlo.jpeg';

const NewPromotionScreen = () => {

    const [businessName, setBusinessName] = useState("")
    const [errorBusinessName, setErrorBusinessName] = useState(false)

    const [name, setName] = useState("")
    const [errorName, setErrorName] = useState(false)

    const [lastName, setLastName] = useState("")
    const [errorLastName, setErrorLastName] = useState(false)

    const [adress, setAdress] = useState("")
    const [errorAdress, setErrorAdress] = useState(false)

    const [days, setDays] = useState("")
    const [errorDays, setErrorDays] = useState(false)

    const [time, setTime] = useState("")
    const [errorTime, setErrorTime] = useState(false)


    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
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
                    <InputWithControl
                        error={errorDays}
                        setValue={setDays}
                        title="Dias"
                        type="text"
                        placeholder="Luenes, Martes"
                        errorMenssage="Es obligatorio el horario"
                    />
                    <InputWithControl
                        error={errorTime}
                        setValue={setTime}
                        title="Horario  de la promosion"
                        type="text"
                        placeholder="2 a 4 pm"
                        errorMenssage="Es obligatorio el horario"
                    />

                    <Button mt="4" onPress={() => console.log("Funciona")}> Continuar </Button>
                </VStack>

        </LayoutWithImage>
    );
}

export default NewPromotionScreen;