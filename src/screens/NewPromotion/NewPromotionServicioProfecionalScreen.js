import React, { useState } from "react";
import LayoutWithImage from "./../../components/LayoutWithImage";
import {
    Text,
    Radio,
    FlatList,
    Heading
} from "native-base"
import MyButtom from './../../components/MyButton';
import AlertMessage from "../../components/AlertMessage";

const optiones = [
    "Si",
    "No"
]

const NewPromotionServicioProfecionalScreen = ({ navigation, route }) => {

    const [servicioProfesional, setServicioProfesional] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const NextScreen = () => {
        if(servicioProfesional != ""){
        navigation.navigate(
                'NeighboursStack',
                {
                    screen: 'NewPromotionDesdeDia',
                    params: {
                    ...route.params,
                    servicioProfesional
                    }
                }
            )
        }else{
            setShowAlert(true)
        }
    }
    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            <Heading size="lg"> Servicio profecional </Heading>
            <Text> Esta promosion que estas creando, ¿Incluye servicios profesional?</Text>
            <Radio.Group
                        name="myRadioGroup"
                        accessibilityLabel="favorite number"
                        onChange={(nextValue) => {
                            setServicioProfesional(nextValue)
                        }}
                    >
                        <FlatList 
                            data={optiones}
                            renderItem={({item}) => <Radio value={item} my={1}> {item} </Radio>}
                        />
                    </Radio.Group>
                <MyButtom 
                    text="Siguiente" 
                    onPress={NextScreen} 
                />
                <AlertMessage 
                    message="Debe seleccionar una opcion para continuar"
                    show={showAlert}
                />
        </LayoutWithImage>
    );
}


export default NewPromotionServicioProfecionalScreen;