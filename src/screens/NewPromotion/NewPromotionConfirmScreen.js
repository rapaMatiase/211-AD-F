import React, { useState } from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import {
    VStack,
    HStack,
    Text,
    Heading,
    Pressable,
    FlatList,
    AspectRatio,
    Image
} from "native-base";
import MyButton from "../../components/MyButton";
import MunicipioEdificioImage from './../../assets/img/EdificioMunicipioDeMerlo.jpeg';
import ModalMessage from "../../components/Modal";
import axios from "axios";


const ImageRow = ({index, item}) =>{
    return (
        
        <AspectRatio ratio={16 / 9}>
            <Image
            source={{uri : "file:///data/user/0/com.municipioappfrontend/cache/Camera/0779c8ea-88a9-48e0-a79a-dcfaf4b66f13.jpg"}}
            alt="image"
        />
               </AspectRatio>

 
    );
}

const NewPromotionConfirmScreen = ({ navigation, route }) => {


    const NextScreen = () => {
        navigation.navigate(
            'NeighboursStack',
            {
                screen: 'UserHome',
                params : {dni : route.params.dni}
            }
        )
    }

    const [showModal, setShowModal] = useState(false)

    /* Aca hay que hacer coneccion al backend */
    


    const CreateNewPromotion = () => {
        const json = {
            tituloPromocion : route.params.businessName, 
            direccion : route.params.adress , 
            desdeDia : route.params.desdeDia, 
            hastaDia : route.params.hastaDia, 
            desdeHora : route.params.desdeHorario, 
            hastaHora : route.params.hastaHorario, 
            descripcion : route.params.detail,
            servicioProfesional : "No", 
            telefono : route.params.telefono, 
            mail : route.params.email, 
            nombre : route.params.name, 
            apellido : route.params.lastName, 
            documento : route.params.dni
        }
        console.log(json)
    
        axios.post('http://10.0.2.2:3000/api/promocion', {
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
                <Heading> Confirma  </Heading>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Nombre del negocio: </Text>
                    <Text fontSize="lg"> {route.params.businessName} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Nombre del dueño: </Text>
                    <Text fontSize="lg"> {route.params.name} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Apellido del dueño: </Text>
                    <Text fontSize="lg"> {route.params.lastname} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Direccion: </Text>
                    <Text fontSize="lg"> {route.params.adress} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Dias: </Text>
                    <Text fontSize="lg"> {route.params.days} </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg" fontWeight="bold"> Horario: </Text>
                    <Text fontSize="lg"> {route.params.time} </Text>
                </HStack>
                <Text fontSize="lg" fontWeight="bold"> Detalle: </Text>
                <Text fontSize="lg"> {route.params.detail} </Text>
                <Text> Imagenes seleccionados </Text>
                <FlatList 
                    data={route.params.images}
                    renderItem={({index, item}) => <ImageRow index={index} item={item} />}
                />

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

export default NewPromotionConfirmScreen;