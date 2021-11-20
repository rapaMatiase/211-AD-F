import React, { useState } from "react";

import {
    Heading,
    Text
} from 'native-base';
import LayoutWithImage from "../../components/LayoutWithImage";
import InputText from "../../components/InputText";
import MyButton from "../../components/MyButton";
/* Este es el primer paso en un reclamo */
const NewComplaintLocationChoseSceen = () => {

    const [businessName, setBusinessNamae] = useState("")
    const [adress, setAdress] = useState("")

    return (
        <LayoutWithImage>
            <Heading size="2xl"> Ubicacion</Heading>
            <Text fontSize="xl">
                Lo primero que debemos hacer es ubicar el lugar del reclamo a realizar.
            </Text>
            <InputText 
                setValue={setBusinessNamae}
                title="Nombre del local"
                placeholder="Pepe's Pizza"
                errorMenssage="Este campo no puede quedar vacio"
            />
            <InputText 
                setValue={setAdress}
                title="Direccion del local"
                placeholder="Av. Directorios 223"
                errorMenssage="Este campo no puede quedar vacio"
            />
            <MyButton text="Siguiente" onPress={()=>{ console.log("JOdete kai")}} />
        </LayoutWithImage>
    )
}

export default NewComplaintLocationChoseSceen;