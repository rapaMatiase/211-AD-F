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


const NuevoReclamoConfirmarScreen = ({ navigation, route }) => {


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

    


    const CreateNewClaims = () => {

        if(accept == true) {
        const json = {
            documento: route.params.dni, 
            idDesperfecto : route.params.idDesperfecto,
            idSitio : route.params.idSitio, 
            idReclamoUnificado : null,
            lugarReclamo : route.params.detailPlace, 
            estado : "Pendiente",
            descripcion : route.params.detailDesperfecto, 
            imagen1: null, 
            imagen2 : null, 
            imagen3 : null,
            imagen4 : null, 
            imagen5 : null, 
            imagen6 : null, 
            imagen7 : null 
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
                    <Text fontSize="lg" fontWeight="bold"> Ubicacion: </Text>
                    <Text fontSize="lg"> {route.params.descripcionSitio} </Text>
                </HStack>

                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Aclaracion de la ubicacion: </Text>
                    <Text fontSize="lg"> {route.params.detailPlace} </Text>
                </HStack>

                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Rubro: </Text>
                    <Text fontSize="lg"> {route.params.descripcionRubro} </Text>
                </HStack>

                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Desperfecto : </Text>
                    <Text fontSize="lg"> {route.params.descripcionDesperfecto} </Text>
                </HStack>


              
                <InputCheckbox text="Acepto los terminos y condiciones" setValue={(value)=> setAccept(value)} />

                <MyButton text="Enviar" onPress={CreateNewClaims} />
            </VStack>

         

        </LayoutWithImage>
    );
}

export default NuevoReclamoConfirmarScreen;