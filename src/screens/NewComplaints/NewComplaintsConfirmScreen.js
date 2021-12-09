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
                documento : route.params.dni, 
                idSitio : route.params.idPlace,
                descripcion : route.params.detailPlace,
                estado : 'Pendiente',
                aceptaResponsabilidad : accept, 
                denunciadoNombre : route.params.nameOfTheAccused, 
                denunciadoApellido : route.params.lastnameOfTheAccused, 
                comercioDenunciado : route.params.buisnessNameOfTheAccused, 
                denunciadoDireccion : route.params.adressBuisnessOfTheAccused,
                denunciadoDocumento : route.params.dniOfTheAccused
            }
            console.log(json)
            axios.post('http://10.0.2.2:3000/api/denuncia', {
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
                    <Text fontSize="lg"> {route.params.namePlace} </Text>
                </HStack>
                <InputCheckbox text="Acepto los terminos y condiciones" setValue={(value)=> setAccept(value)} />

                <MyButton text="Enviar" onPress={CreateNewPromotion} />
            </VStack>

         

        </LayoutWithImage>
    );
}

export default NewComplaintsConfirmScreen;