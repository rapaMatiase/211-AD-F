import React, { useState } from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import {
    VStack,
    HStack,
    Text,
    Heading
} from "native-base";
import MyButton from "../../components/MyButton";
import MunicipioEdificioImage from './../../assets/img/EdificioMunicipioDeMerlo.jpeg';
import axios from "axios";
import InputCheckbox from "../../components/InputCheckbox";


const NewClaimsConfirmScreen = ({ navigation, route }) => {


    const NextScreen = () => {
        navigation.navigate(
            'NeighboursStack',
            {
                screen: 'UserHome'
            }
        )
    }

    const [showModal, setShowModal] = useState(false);
    const [accept, setAccept] = useState(false); 

    


    const CreateNewPromotion = () => {

        if(accept == true) {
        const json = {
            documento: route.params.dni, 
            idDesperfecto : '1', 
            idSitio : route.params.idPlace, 
            idReclamoUnificado : '1',
            lugarReclamo : route.params.detailPlace, 
            descripcion : route.params.detail, 
            imagen1: '', 
            imagen2 : '', 
            imagen3 : '',
            imagen4 : '', 
            imagen5 : '', 
            imagen6 : '', 
            imagen7 : '' 
        }
        console.log(json)
    
        axios.post('http://10.0.2.2:3000/api/reclamo', {
            ...json
        })
            .then(function (response) {
                console.log(response.status)
                if (response.status == "200") {
                    console.log("Esta publicado")
                    setShowModal(true)
                }
            })
            .catch(function (error) {
                console.log(error.response.status)
                if (error.response.status === "401") {
                    console.log("Boludo")
                }

            })
        }else{
            console.log("NOnoon")
        }
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">

            <VStack space={4} style={{ flex: 1 }}>
                <Heading> Datos del reclamo 4 </Heading>


                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Descripcion del reclamo: </Text>
                    <Text fontSize="lg"> {route.params.detail} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Ubicacion: </Text>
                    <Text fontSize="lg"> {route.params.namePlace} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Descripcion de la ubicacion: </Text>
                    <Text fontSize="lg"> {route.params.detailPlace} </Text>
                </HStack>
                <InputCheckbox text="Acepto los terminos y condiciones" setValue={(value)=> setAccept(value)} />

                <MyButton text="Enviar" onPress={CreateNewPromotion} />
            </VStack>

         

        </LayoutWithImage>
    );
}

export default NewClaimsConfirmScreen;