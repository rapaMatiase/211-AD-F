import React, { useState } from "react";

import {
    Heading,
    Text,
    Pressable
} from 'native-base';
import LayoutWithImage from "../../components/LayoutWithImage";
import MyButton from "../../components/MyButton";
import Modal from "../../components/Modal";
import ModalWithCheckbox from "../../components/ModalWithCheckbox";

import InputCheckbox from "../../components/InputCheckbox";
/* Este es el primer paso en un reclamo */

const NewComplaintConfirmSceen = (props) => {


    const [showModalAttention, setShowModalAttention] = useState(true)
    const [agree, setAgree] = useState(false)

    return (
        <LayoutWithImage>
            <Heading size="2xl"> Confirmar el reclamo</Heading>
            <Text fontSize="xl">
                Antes de enviar el reclamo confirma que la informacion ingresada es correcta. No podras cambiar despues de enviarla.
            </Text>

            <Text fontSize="xl">
                {props.buisnessName || "Sin local"}
            </Text>

            
            <Text fontSize="xl">
                {props.adress || "Sin direccion"}
            </Text>


            <Text fontSize="xl">
                {props.detail || "Sin detalle"}
            </Text>
            
            <Text fontSize="xl">
                {props.image || "Sin Imagenes"}
            </Text>


            <MyButton text="Enviar" onPress={()=>{setShowModalAttention(true)}} />
         
        </LayoutWithImage>
    )
}

export default NewComplaintConfirmSceen;