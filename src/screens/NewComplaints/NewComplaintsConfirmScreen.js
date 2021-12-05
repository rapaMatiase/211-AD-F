import React, { useState } from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import {
    VStack,
    HStack,
    Text,
    Heading,
    Pressable,
    FlatList
} from "native-base";
import MyButton from "../../components/MyButton";
import MunicipioEdificioImage from './../../assets/img/EdificioMunicipioDeMerlo.jpeg';
import ModalMessage from "../../components/Modal";
import axios from "axios";


const imageRow = (index) =>{
    return (
        <HStack>
            <Text> Image number {index} </Text>
        </HStack>
    );
}

const NewComplaintsConfirmScreen = ({ navigation, route }) => {


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
    /* Aca hay que hacer coneccion al backend */
    


    const CreateNewPromotion = () => {
        const json = {
            documento : '', 
            denunciadoNombre : route.params.nameOfTheAccused, 
            denunciadoApellido : route.params.lastnameOfTheAccused, 
            comercioDenunciado : route.params.buisnessNameOfTheAccused, 
            denunciadoDireccion : route.params.adressBuisnessOfTheAccused,
            denunciadoDocumento : route.params.dniOfTheAccused, 
            aceptaResponsabilidad : accept, 
            descripcion : route.params.lastnameOfTheAccused,
            idSitio : route.params.params.idPlace,
        }
        console.log(json)
    
       /*  axios.post('http://10.0.2.2:3000/api/', {
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

            }) */
    }

    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">

            <VStack space={4} style={{ flex: 1 }}>
                <Heading> Datos del denunciado  </Heading>

                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Nombre: </Text>
                    <Text fontSize="lg"> {route.params.nameOfTheAccused} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Apellido: </Text>
                    <Text fontSize="lg"> {route.params.lastnameOfTheAccused} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Nombre del local: </Text>
                    <Text fontSize="lg"> {route.params.buisnessNameOfTheAccused} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Direccion: </Text>
                    <Text fontSize="lg"> {route.params.adressBuisnessOfTheAccused} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Dni: </Text>
                    <Text fontSize="lg"> {route.params.dniOfTheAccused} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Ubicacion: </Text>
                    <Text fontSize="lg"> {route.params.params.namePlace} </Text>
                </HStack>
                
           

                <MyButton text="Enviar" onPress={CreateNewPromotion} />
            </VStack>

            <ModalMessage title="Promo enviada" message="La promocion fue enviada. Te enviaremos un email en 15 dias con el resultado" show={showModal} >
                <Pressable onPress={NextScreen}>
                    <Text> Volver al inicio </Text>
                </Pressable>
            </ModalMessage>

        </LayoutWithImage>
    );
}

export default NewComplaintsConfirmScreen;