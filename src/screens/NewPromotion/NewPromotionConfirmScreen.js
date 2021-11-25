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


const imageRow = (index) =>{
    return (
        <HStack>
            <Text> Image number {index} </Text>
        </HStack>
    );
}

const NewPromotionConfirmScreen = ({ navigation, route }) => {


    const NextScreen = () => {
        navigation.navigate(
            'NeighboursStack',
            {
                screen: 'UserHome'
            }
        )
    }

    const [showModal, setShowModal] = useState(false)

    /* Aca hay que hacer coneccion al backend */
    


    const CreateNewPromotion = () => {
        const json = {
            tituloPromocion, 
            direccion, 
            desdeDia, 
            hastaDia, 
            desdeHora, 
            hastaHora, 
            descripcion,
            servicioProfesional, 
            telefono, 
            mail, 
            nombre, 
            apellido, 
            documento
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
                    renderItem={({index, item}) => <imageRow index={index} />}
                />

                <MyButton text="Enviar" onPress={() => setShowModal(true)} />
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