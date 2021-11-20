import React, { useState } from "react";

import {
    Heading,
    Text,
    Pressable
} from 'native-base';
import LayoutWithImage from "../../components/LayoutWithImage";
import MyButton from "../../components/MyButton";
import Modal from "../../components/Modal";


import InputCheckbox from "../../components/InputCheckbox";
/* Este es el primer paso en un reclamo */

const NewComplaintAcceptSceen = (props) => {

    const [agree, setAgree] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <LayoutWithImage>
            <Heading size="2xl"> ¡Atencion! </Heading>
           
            <Text fontSize="xl">
                {props.image || "Ustedes entiende que esta enviando una declaracion jurada y de proveer informacion falsa, el municipio o el acusado puede tomar medidas legales contra usted."}
            </Text>

            {/* <InputCheckbox  /> */}
            <MyButton text="Enviar" onPress={()=>{console.log("JOdete kai")}} />
            <Modal 
                title="Denuncia hecha" 
                message="Su solicitud a sido registrado con exito. Recibira un email en 15 dias con el resutlado." 
                show={showModal}
            >
                <Pressable onPress={() => console.log("Jodete1")}>
                    <Text fontSize="lg" color="lightBlue.400" fontWeight="bold"> Ver promosiones</Text>
                </Pressable>
                <Pressable onPress={() => console.log("Jodete2")}>
                    <Text fontSize="lg" color="lightBlue.400" fontWeight="bold"> Ir al inicio</Text>
                </Pressable>
            </Modal>
        </LayoutWithImage>
    )
}

export default NewComplaintAcceptSceen;