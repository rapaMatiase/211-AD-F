import React, { useState } from "react";

import {
    Heading,
    Text
} from 'native-base';
import LayoutWithImage from "../../components/LayoutWithImage";
import InputTextArea from "../../components/InputTextarea";
import MyButton from "../../components/MyButton";
/* Este es el primer paso en un reclamo */

const NewComplaintDetailSceen = () => {

    const [detail, setDetail] = useState("")

    const ValidatorDetail = (input) => {
        return input ? true : false
    }

    return (
        <LayoutWithImage>
            <Heading size="2xl"> Detalle</Heading>
            <Text fontSize="xl">
                Ahora necesitamos que detalle del reclamo que esta llevando a cabo. 
            </Text>
            <InputTextArea 
                setValue={setDetail}
                title="Nombre del local"
                placeholder="Pepe's Pizza"
                errorMenssage="Este campo no puede quedar vacio"
                validator={ValidatorDetail}
            />
            <MyButton text="Siguiente" onPress={()=>{ console.log("JOdete kai")}} />
        </LayoutWithImage>
    )
}

export default NewComplaintDetailSceen;